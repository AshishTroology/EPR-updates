import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../service/auth.service'
import {TosterService} from '../service/toster.service'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm!:FormGroup;

  public  active:boolean=false

  public display:boolean=false
  public displaypassword:boolean=false
  public displayotp:boolean=false

  constructor(private fb:FormBuilder,
    private auth:AuthService,
    private toast:TosterService,
    private router:Router,
    private spinner: NgxSpinnerService
    ) { }


  SubmitLogin():void{
    this.spinner.show();
    this.checkoutForm.valid?
    this.auth.loginUser(this.checkoutForm.value).subscribe((user:any)=>{
      if(user.status===200){
        console.log(user)
        localStorage.setItem('username',user.results.username)
        localStorage.setItem('user',user.results.email)
        localStorage.setItem('userdata', JSON.stringify(user.results));
        setTimeout(() => {
          this.spinner.hide();
          if (user.results.role === '62441e61257f8d07cdbf823d'){
            this.router.navigate(['/']);
          }
          else{
            this.router.navigate(['/order-list']);
          }
        }, 1500);
      }
      else if(user.status===404){
        this.spinner.hide();
        this.toast.showError(user.message)
      }
      if(user.status===401){
        this.spinner.hide();
        this.toast.showError(user.message)
      }

    })
    :this.toast.showError("Incorrect Data")
  }

  SubmitOtp():void{
    this.auth.VerifyEmail(this.checkoutForm.value).subscribe((response:any)=>{
      if(response.status===200){
        console.log(response)
        localStorage.setItem('username',response.results[0].username)
        localStorage.setItem('user',response.results[0].email)
        setTimeout(() => {
          this.router.navigate(['/'])
          }, 1500);
      }else{
        this.toast.showError(response.message)
      }
    })
  }


  CheckEmail(usertype:any): void {
    this.spinner.show();
    this.checkoutForm.valid?

    this.auth.CheckEmail(this.checkoutForm.value).subscribe((user:any)=>{
      if(user.status===200){

        this.toast.showSuccess(user.message)
        setTimeout(() => {
          this.display=true
          this.active=true
          if(usertype=="otp"){
            this.auth.SendEmail(this.checkoutForm.value).subscribe((data:any)=>{
              if(data.status==200){
                this.toast.showSuccess(data.message)
                this.displayotp=true
              }else {
                this.toast.showError(data.message)
                this.displayotp=false
              }
            })
          }else if(usertype=="password"){
            this.spinner.hide();
            this.displaypassword=true
          }
        }, 1500);
        // alert(user.message)
      }
      else if(user.status===404){
        this.spinner.hide();
        this.toast.showError(user.message)
      }
      if(user.status===401){
        this.spinner.hide();
        this.toast.showError(user.message)
      }

    })
    :this.toast.showError("Incorrect Data")
  }

  ngOnInit(): void {
    localStorage.clear()
    this.forminit()
  }


  forminit(){
    this.checkoutForm = this.fb.group({
      email: ['',Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
      otp:'',
      // password:''
      password: ['']
    });
  }
  keyDownFunction(event:any) {
    if (event.keyCode === 13) {
      // this.checkoutForm
      this.SubmitLogin();
    }

  }
}
