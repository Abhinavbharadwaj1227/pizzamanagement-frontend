import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CartService{

    constructor(private http: HttpClient){}

    addToCart(body: any){
        console.log(body);
        return this.http.post('http://localhost:8080/posttomycart',body);
    }
    getCartItems(customerid: string) {
        return this.http.get(`http://localhost:8080/getfrommycart/`+customerid);
    }

    
    

    updateQuantityInDatabse(item:any){
        return this.http.put('http://localhost:8080/posttomycart',item)
    }

    removeFromCart(id:number){
        console.log(id);
       return this.http.delete(`http://localhost:8080/Deletefrommycart/`+id);

    }
}