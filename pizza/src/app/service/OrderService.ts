import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class OrderService{

    constructor(private http: HttpClient){}

    addToOrders(body: any){
        console.log(body);
        return this.http.post('http://localhost:8080/orders',body);
    }
    getFromOrders(customerid: string) {
        return this.http.get(`http://localhost:8080/custorder/`+customerid);
    }
}