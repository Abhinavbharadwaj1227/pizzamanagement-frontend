import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/CartService';
import { OrderService } from '../service/OrderService';
import { ProductService } from '../service/ProductService';
import { Order } from '../model/Order';
import { Product } from '../model/Product';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
product:Product;
productId:number;
customer:Order;

constructor(private route:ActivatedRoute,private productdatabase:ProductService,private cartdatabase:CartService,private orderdatabase:OrderService){}
  ngOnInit()  {
    

    this.route.params.subscribe(params=>{
      const productId=+params['id'];
      console.log(productId);
      this.productdatabase.getProductById(productId).subscribe((product:Product)  =>{this.product=product; }
      );

     });
}
addToCart(id:number){
  let body={ productid:id,
    email:localStorage.getItem("email")
    

  }
  console.log(body);
  this.cartdatabase.addToCart(body).subscribe(
    body=>{
      alert('Item added to cart')
    }
  )
 }

 addToOrders(){
  let body={
    customer:{
      customerid:localStorage.getItem("id")
    } 
    

  }
  console.log(body);
  this.orderdatabase.addToOrders(body).subscribe(
    body=>{
      alert('Order Placed Sucessully')
    }
  )
 }

}
