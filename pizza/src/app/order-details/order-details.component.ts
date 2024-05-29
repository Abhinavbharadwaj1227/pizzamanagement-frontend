import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../service/OrderService';
import { Order } from '../model/Order';
import { Product } from '../model/Product';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {


  orderId:number;
  order: Order[];
  pizza:Product;
  constructor(private route:ActivatedRoute,private orderdatabase:OrderService){}

  ngOnInit()  {
    


    this.route.params.subscribe(params=>{
      const orderId=localStorage.getItem('customerid');
      console.log(orderId);
      this.orderdatabase.getFromOrders(orderId).subscribe((order:Order[])  =>
      {this.order=order; 
        console.log(this.order);
      }
      );

     });
}
  
}
