import { EmailValidator } from "@angular/forms";

export interface loginRequest{
    userName: string;
    userId:  string;
    password: string;
}

export interface LoginResponse
{
    token:string;
    refreshToken:string;

}
export interface SignUpRequest{
    UserName:"";
    EmailId:"";
    Password:"";
    City:"";
    State:"";
    Country:"";
    District:"";
    Address:"",

}