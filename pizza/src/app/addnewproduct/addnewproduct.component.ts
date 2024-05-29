import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/AdminService';
import { Product } from '../model/Product';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrl: './addnewproduct.component.css'
})
export class AddnewproductComponent {

  pizzaName:'';
  ingredients:'';
  price:number;
  quantity:number;
  img:'';

  constructor(private adminDB:AdminService,
    private router: Router) {}
  ngOnInit() {

  }

  postproducts() {
    if (!this.pizzaName || !this.ingredients || !this.price || !this.quantity ||this.img) {
      alert('Please enter all the product details');
      return;
    }
    let productForm = { pizzaName: this.pizzaName, ingredients: this.ingredients
      ,price:this.price,quantity:this.quantity,img:this.img};
    console.log(productForm);
    this.adminDB.postproducts(productForm).subscribe(
    (body) => {
            console.log(body);
           
           this.router.navigate(['/addproducts']);
           alert('product added sucessfully')
          },
          (error) => {
          console.error('Error  Adding new Product:', error);
          alert('Cannot Add New Product.');
          }
          );
  }
    
}

