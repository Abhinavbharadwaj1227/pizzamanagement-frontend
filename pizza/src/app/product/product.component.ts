import { Component, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../service/CartService';
import { ProductService } from '../service/ProductService';
import { Product } from '../model/Product';


@Component({
  selector: 'app-product',
  templateUrl:'./product.component.html',
  styleUrl: './product.component.css'
})
@Injectable()
export class ProductComponent {
product:Product[];
product1:Product;
 constructor(private router:Router ,public productfetch:ProductService,private cartdatabase:CartService){}

 ngOnInit(){
  this.reloadData();
 }

 reloadData(){
  this.productfetch.getProduct().subscribe(
    (body:Product[])=>{
      console.log(body);
      this.product=body;

    }
    
  );


 }




}







