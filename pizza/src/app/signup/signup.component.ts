import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupService} from '../service/SignupService';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';


@Component({
  selector: 'app-signup',
  templateUrl:'./signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  city='';
  customername='';
  email='';
  password='';

  constructor(private signupDB: SignupService,
    private router: Router) {}
  ngOnInit() {

  }

  signupValidation() {
    // Check if all details are filled in the form
    if (!this.customername || !this.city || !this.email || !this.password) {
      alert('Cannot sign up since details are empty. Please fill all the details in the form.');
      return;
    }
    if
    (this.email.includes("@gmail")||this.email.includes("@yahoo")){
  
    // Check if the email ends with @admin.com or @Admin.com
    if (this.email.toLowerCase().endsWith("@admin.com")) {
      alert('Cannot sign up users using email id ending with @admin.com or @Admin.com');
      return;
    }

    // Password validation
    if (!this.isValidPassword(this.password)) {
      alert('Password must include at least one uppercase letter, one special character, and one number.');
      return;
    }
  
    let signupForm = { email: this.email, password: this.password, city: this.city, customername: this.customername };
  
    this.signupDB.createCustomer(signupForm).subscribe(
      (body: Customer) => {
        console.log(body);
        alert('Signed up successfully');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error signing up in:', error);
        alert('User Already Exist With Same Email. Please Use Another Email.');
      }
    );
  }
  else{
    alert("please enter a valid email")
  }
}

  // Password validation function
  isValidPassword(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    return hasUpperCase && hasNumber && hasSpecialChar;
  }
}
