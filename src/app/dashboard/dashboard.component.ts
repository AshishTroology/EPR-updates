import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';

import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userdata: any;
  jsondata: any;
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  filedatainput: any;
  customerdata: any;
  constructor(
    private router: Router,
    private customer: CustomerService
  ) {}

  public gridData: any;
  public gridView: any;

  dtOptions: DataTables.Settings = {};

  public mySelection: string[] = [];

  public ngOnInit(): void {
    this.jsondata = localStorage.getItem('userdata');
    this.userdata = JSON.parse(this.jsondata);
    this.customer
      .view_certificatebyname({ organisation_name: this.userdata.username})
      .subscribe((itemm: any) => {
        console.log(itemm);
        this.gridView = itemm.ress;
      });
  }
}
