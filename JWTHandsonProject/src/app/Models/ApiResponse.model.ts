export interface ApiResponse<T>{
    /**
     *
     */
    statusCode:number;
    message:string;
    data:T 
    
    // constructor(_StatusCode:number,_ResponseMessage:string,_data:T) {
    //      this.StatusCode=_StatusCode;
    //      this.ResponseMessage=_ResponseMessage;
    //      this.Data=_data;
        
    // }

}


export interface Wheather{
     Date :Date
     TemperatureC :number
     TemperatureF:number
     Summary :string
}

export interface Samples{
     id:number
     name: string  
     description :string
     author :string
     postalCode :string
     country:string
     phone :string
     fax :string
}