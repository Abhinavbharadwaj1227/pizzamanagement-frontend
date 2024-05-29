import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/Product";

@Injectable()
export class ProductService{

    private apiUrl = 'http://localhost:8080';
    constructor(private http: HttpClient){}

    getProduct(){
        return this.http.get('http://localhost:8080/pizzatype');
    }

    getProductById(productId: number) {
        return this.http.get(`http://localhost:8080/pizzatype/`+productId);
    }

    updatePizzatype(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/putpizzatype/${product.pizzaid}`, product);
  }
  deletePizzatype(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletepizzatype/${id}`);
  }

  findallpizzatype(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/pizzatype`);
  }
}