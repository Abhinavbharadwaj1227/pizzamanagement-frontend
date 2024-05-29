import { Component ,OnInit} from '@angular/core';
import { CartService } from '../service/CartService';
import { OrderService } from '../service/OrderService';
import { ProductService } from '../service/ProductService';
import { Cart } from '../model/cart';
import { Product } from '../model/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems: Cart[];

  product1:Product[];

  constructor(private cartdatabase: CartService,private orderdatabase:OrderService,private router:Router){}
 

  ngOnInit(){
//     console.log("email:");
    


    this.getCartItems();
    

  }


  getCartItems(){
    const id=localStorage.getItem("customerid");
console.log(id);
    this.cartdatabase.getCartItems(id).subscribe((items: Cart[]) => {

      this.cartItems = items;
      console.log(this.cartItems)

    });

  }
 
  addToOrders(){
    let body={
      customer:{
        customerid:localStorage.getItem("customerid")
      } 
      
  
    }
    console.log(body);
    this.orderdatabase.addToOrders(body).subscribe(
      body=>{
        alert('Order Placed Sucessully'),this.router.navigate(['/user']);
      },
   (error)=>{
    console.error("Quantity Out of stock",error);
    alert('Sorry We Are Currently Running Out of Stock');
   }

      
    )
    }

    incrementQuantity(item:any){
      item.quantity++;
      item.price=item.price+item.pizza.price;
      console.log(item)
      this.cartdatabase.updateQuantityInDatabse(item).subscribe(
        body=>{
          console.log(body);
        }
      );
    }
    decrementQuantity(item:any){
      if(item.quantity>1){
        item.quantity--;
        item.price=item.price-item.pizza.price;
        this.cartdatabase.updateQuantityInDatabse(item).subscribe(
          body=>{
            console.log(body);
          });
      }
      else{
        this.removeFromCart(item);
      }
    
    }

  

  
  


  
  removeFromCart(item: any) {

    

     this.cartdatabase.removeFromCart(item.cartId).subscribe(
           body=>{
            this.getCartItems();
           }

     );

  }

}

