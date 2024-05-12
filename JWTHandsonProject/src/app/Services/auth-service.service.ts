import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse, loginRequest } from '../Models/login.model';
import { HttpContextService } from '../Shared/httpcontext.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService<T> {

private IsUAuthenticate:boolean=false;


SetIsUAuthenticate(IsUauth:boolean) {
   this.IsUAuthenticate=IsUauth;
}
  isLoggedIn():boolean {
    return this.IsUAuthenticate;
  }

  url:string="https://localhost:7157/api/User/Login"
   private _httpclient =inject(HttpClient);
  constructor(private _http:HttpContextService) 
  { 

  }


  // Login(loginRequest :loginRequest):Observable<LoginResponse>{

  //   return this._httpclient.post<LoginResponse>(this.url,loginRequest);
    
  // }
   
  Login(loginRequest :loginRequest):Observable<T>{

    //return this._httpclient.post<T>(this.url,loginRequest);

    return this._http.Post<T>(this.url,loginRequest)
    
  }
  public GetWheather<M>(uri:string,param:any):Observable<M>{
     return this._http.Get(uri,param)

  }
   
}
