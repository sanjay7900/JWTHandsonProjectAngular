import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../Services/auth-service.service';
import { LoginResponse, loginRequest } from '../../Models/login.model';
import { HttpClientModule } from '@angular/common/http';
import { Serializer } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { HttpContextService } from '../../Shared/httpcontext.service';
import { Wheather } from '../../Models/ApiResponse.model';
import { Observable, delay } from 'rxjs';
import { Router } from '@angular/router';
import { Common } from '../../Shared/Common/Common';
import { AuthGuard } from '../../AuthGuard/guard.guard';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthServiceService,HttpContextService,AuthGuard]
})
export class LoginComponent implements OnInit {
 /**
  *
  */
 loginform!:FormGroup;

 private loginReq:loginRequest={
  userId:"",
  userName:"",
  password:""

 }
 data:LoginResponse={
  refreshToken:'',
  token:''
 }
 
 constructor( private _AuthServise:AuthServiceService<LoginResponse>,
  private fb:FormBuilder,
  private _router:Router
) {
  this.loginform=this.fb.group({
    userId:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
    

   

  })
  console.log(Common.CompactNumber(12334));
 

  
 }
 loginClick()
 {
  if(this.loginform.valid){
    console.log(this.loginform.get('userId')?.value);
    this.loginReq.password=this.loginform.get('password')?.value;
    this.loginReq.userId=this.loginform.get('userId')?.value
    this.loginReq.userName='string';
     this._AuthServise.Login(this.loginReq).subscribe((response:LoginResponse)=>{
      console.log(response);
      this.data= response;
      localStorage.setItem('AccessToken',this.data.token);
      localStorage.setItem('LoginResponse',JSON.stringify(this.data));
      console.log( localStorage.getItem('LoginResponse'));
      console.log(localStorage.getItem('AccessToken'));
      this._AuthServise.SetIsUAuthenticate(true);
      
      this._router.navigate(['/Home']);
      
      
    });


   
   
  }
   else{
    this.loginform.markAllAsTouched
   }

 }
 
  ngOnInit():void {
    console.log("sanjay suingng");



    
    
  }


  

  

}
