import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SignupService{

    constructor(private http1:HttpClient){}

    createCustomer(body:any){
        console.log(body);
        return this.http1.post('http://localhost:8080/customer123',body)

    }
    Updatecustomer(customerid:any){
        return this.http1.put('http://localhost:8080/putcustomer',customerid)
    }
    fetchuser(id:string){
        return this.http1.get('http://localhost:8080/customerbyid/'+id);
    }
}