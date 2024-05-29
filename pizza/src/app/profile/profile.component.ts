import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../service/SignupService';
import { Customer } from '../model/customer';


@Component({
  selector: 'app-profile',
  templateUrl:'./profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  customername:any;
  city:any;
  email:any;
  customerid:any;




  constructor(private Signupdatabase:SignupService,
    private router: Router) {}
  ngOnInit() {
    this.Signupdatabase.fetchuser(localStorage.getItem('customerid')).subscribe(
      (body:Customer)=>
      {
        console.log(body);
        this.customername=body.customername;
        this.city=body.city;
        this.email=body.email;
        this.customerid=body.customerid;

      }
    )
   
  }

  updatecustomer() {
    if (!this.customername || !this.city) {
      alert('please fill all the details');
      return;
    }
    let UpdateForm = { customername: this.customername, city: this.city,customerid:this.customerid
      };
    console.log(UpdateForm);
    this.Signupdatabase.Updatecustomer(UpdateForm).subscribe(
    (body) => {
            console.log(body);
            alert("your profile details has beeen updated sucessfully")
           
           //this.router.navigate(['/user']);
          },
          (error) => {
          console.error('Error  Modifying details', error);
          alert('Cannot Update Your details please visit after sometime.');
          // this.router.navigate(['/user']);
          }
          );
  }
    
}