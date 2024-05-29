import { Component, Injectable } from '@angular/core';
import { Customer } from '../model/customer';


import { Router } from '@angular/router';
import { LoginService } from '../service/loginService';



@Component({
  selector: 'app-userhomepage',
  templateUrl:'./userhomepage.component.html',
  styleUrl: './userhomepage.component.css'
})

export class UserhomepageComponent {

   customer: Customer;

  
  constructor(
    
    private router:Router, private loginDB:LoginService
    
    ){}

    navigateToProductDetails(productId: string) {
      this.router.navigate(['/product', productId]);
  }

  
  ngOnInit(){
   
    
    let body={
      email:localStorage.getItem("email"),
      password:localStorage.getItem("password")
    }
    this.loginDB.fetchUser(body).subscribe(
      (customer:Customer)=>{
        this.customer=customer;
      }
    );

   

    
  }
  onLogout(){
    localStorage.setItem("email",'');
    localStorage.setItem("password",'');
    localStorage.setItem("role",'');
    this.router.navigate(['/login'])
  }
  

}
