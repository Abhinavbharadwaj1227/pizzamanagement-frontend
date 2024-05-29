import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/loginService';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private loginDB: LoginService, private router: Router) {}

  
  validateForm() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return false;
    }

    if (this.password.length < 6) {
      alert('Password should be a minimum of 6 characters.');
      return false;
    }

    return true;
  }

  login() {
    if (!this.validateForm()) {
      return;
    }

    let loginForm = { email: this.email, password: this.password };

    if (loginForm.email.endsWith("@admin.com")) {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin']);
    } else {
      localStorage.setItem('role', 'user');
      this.loginDB.fetchUser(loginForm).subscribe(
        (body: Customer) => {
          localStorage.setItem("email", body.email);
          let id = body.customerid.toString();
          localStorage.setItem("customerid", id);
          localStorage.setItem("password", body.password);
          
          console.log(body);
          
          this.router.navigate(['/user']);
        },
        (error) => {
          console.error('Error logging in:', error);
          alert('Invalid username or password.');
        }
      );
    }
  }

}
