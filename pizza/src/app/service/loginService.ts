import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoginService{

    constructor(private http: HttpClient){}

    fetchUser(body: any){
        console.log(body);
        return this.http.post('http://localhost:8080/customer/login',body);
    }
  
}