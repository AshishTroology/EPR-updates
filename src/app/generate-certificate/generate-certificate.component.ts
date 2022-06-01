import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { process } from "@progress/kendo-data-query";
import { NgxSpinnerService } from 'ngx-spinner';
import { AttachmentService } from '../service/attachment.service';
import { CustomerService } from '../service/customer.service';
import { TosterService } from '../service/toster.service';


@Component({
  selector: 'app-generate-certificate',
  templateUrl: './generate-certificate.component.html',
  styleUrls: ['./generate-certificate.component.css'],
})
export class GenerateCertificateComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  certificateForm!: FormGroup;
  filedatainput: any;
  customerdata: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private Attach: AttachmentService,
    private toast: TosterService,
    private customer: CustomerService,
    private spinner: NgxSpinnerService
  ) {}

  public gridData: any;
  public gridView: any;

  dtOptions: DataTables.Settings = {};

  public mySelection: string[] = [];

  public ngOnInit(): void {
    this.customer.getcertificate().subscribe((itemm: any) => {
      console.log(itemm);
      this.gridView = itemm.ress;
    });
    this.customer.getcustomer().subscribe((item: any) => {
      console.log(item.result);
      this.customerdata = item.result;
    });
    this.forminit();
  }

  forminit() {
    this.certificateForm = this.fb.group({
      org_name: '',
      doc_name: '',
      doc_description: '',
      po_no: '',
      month: '',
      doc_file: '',
    });
  }

  fileupload(e: any) {
    console.log(e)
    this.spinner.show()
    console.log(e.target.files[0].type);
    if (
      e.target.files[0].type == 'application/pdf' ||
      e.target.files[0].type == 'image/png' ||
      e.target.files[0].type == 'image/jpeg' ||
      e.target.files[0].type == 'image/jpg'
    ) {
      this.Attach.UploadFile(e.target.files, '3452345').subscribe(
        (imagedata: any) => {
          console.log(imagedata);
          this.spinner.hide();
          this.filedatainput = imagedata.url;
        }
      );
    } else {
      this.spinner.hide();
      this.filedatainput = null;
      this.toast.showError('Invalid File.');
    }
    // this.spinner.hide();
  }

  Onsubmit() {
    if (this.certificateForm.invalid) {
      console.log('errrrrrrrrrr');
    } else {
      this.certificateForm.value.doc_file = this.filedatainput;
      console.log(this.certificateForm.value);
      this.customer
        .submitCertificate(this.certificateForm.value)
        .subscribe((item: any) => {
          this.toast.showSuccess('Certificate Save Successfully');
          setInterval(function () {
            window.location.reload();
          }, 3000);
        });
    }
  }

  public onFilter(e: any): void {
    let inputValue = e.target.value;
    this.gridView = process(this.gridData, {
      filter: {
        logic: 'or',
        filters: [
          {
            field: 'ulb_id',
            operator: 'contains',
            value: inputValue,
          },
          {
            field: 'ulb_name',
            operator: 'contains',
            value: inputValue,
          },
          {
            field: 'mobile_no',
            operator: 'contains',
            value: inputValue,
          },
          {
            field: 'email',
            operator: 'contains',
            value: inputValue,
          },
          {
            field: 'first_name',
            operator: 'contains',
            value: inputValue,
          },
          {
            field: 'ulb_state',
            operator: 'contains',
            value: inputValue,
          },
          {
            field: 'ulb_city',
            operator: 'contains',
            value: inputValue,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }

  deleteCertificate(id: any) {
    if (confirm('Are you sure want to delete')) {
      this.customer.deletecertificatebyid(id).subscribe((item: any) => {
        this.toast.showSuccess('Certificate Deleted');
        setInterval(function () {
          window.location.reload();
        }, 3000);
      });
    } else {
    }
  }

  publishCertificate(id: any, status: boolean) {
    if (confirm('Are you sure want to publish')) {
      this.customer
        .publishcertificate(id, { status: !status })
        .subscribe((item: any) => {
          this.toast.showSuccess(!status ? 'Published' : 'Unpublished');
          setInterval(function () {
            window.location.reload();
          }, 3000);
        });
    } else {
    }
  }
}

