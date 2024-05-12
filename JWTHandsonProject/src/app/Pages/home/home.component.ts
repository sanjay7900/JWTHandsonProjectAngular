import { Component, OnInit } from '@angular/core';
import { HttpContextService } from '../../Shared/httpcontext.service';
import { ApiResponse, Samples, Wheather } from '../../Models/ApiResponse.model';
import { AuthServiceService } from '../../Services/auth-service.service';
import { LoginResponse, loginRequest } from '../../Models/login.model';
import { AuthGuard } from '../../AuthGuard/guard.guard';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[HttpContextService,AuthServiceService,AuthGuard]

})
export class HomeComponent implements OnInit {
  /**
   *
   */
  constructor(private _httpcontext:HttpContextService, private _authContext:AuthServiceService<LoginResponse>) {
    
  }

SampleList:Samples[]=[];




  ngOnInit(): void {
    this.get();
    this.GetSamplesData();
    const formmeter=Intl.NumberFormat("en",{
      notation:"compact"
  })
  console.log(formmeter.format(123456));
  console.log(formmeter.format(123456000));
  console.log(formmeter.format(1234569));
  console.log(formmeter.format(678));
  console.log(formmeter.format(9879));
   
    
  }
  GetSamplesData(){
    this._httpcontext.Get<ApiResponse<Samples[]>>("https://localhost:7157/api/SampleCrud/GetSample").subscribe((response:ApiResponse<Samples[]>)=>{
    if(response.statusCode==200){
      confirm(response.message)
    }  
    this.SampleList=response.data;
      console.table(this.SampleList);
       console.table(response);
    })
  }
  get(){
    const o= {'UserId':'string','UserName':'string','Password':'string'};
    this._authContext.GetWheather<Wheather[]>('https://localhost:7157/api/WeatherForecast/Get',o).subscribe((res:Wheather[])=>{
      console.table(res);
    });
  }

}
