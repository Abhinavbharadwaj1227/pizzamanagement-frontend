import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingmodule } from './app.routing';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/loginService';
import { SignupService } from './service/SignupService';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';

import { ProductService} from './service/ProductService';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { CartService} from './service/CartService';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderService } from './service/OrderService';
import { AdminComponent } from './admin/admin.component';
import { AddnewproductComponent } from './addnewproduct/addnewproduct.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminService } from './service/AdminService';
//import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    UserhomepageComponent,
    ProductComponent,
    ProductdetailsComponent,
    CartComponent,
    OrderDetailsComponent,
    AdminComponent,
    AddnewproductComponent,
    ProfileComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,AppRoutingmodule,FormsModule,HttpClientModule,RouterModule
  ],
  providers: [LoginComponent,LoginService,SignupService,ProductService,
  CartService,OrderService,ProfileComponent,AboutusComponent,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
