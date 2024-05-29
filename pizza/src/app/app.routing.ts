import { Component, NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { AddnewproductComponent } from "./addnewproduct/addnewproduct.component";
import { AdminAuthService } from "./admin-auth.service";
import { AdminComponent } from "./admin/admin.component";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { ProductComponent } from "./product/product.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";
import { UserAuthService } from "./user-auth.service";
import { UserhomepageComponent } from "./userhomepage/userhomepage.component";

const routes:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'admin',component:AdminComponent,canActivate:[AdminAuthService]},
    {path:'addproducts',component:AddnewproductComponent,canActivate:[AdminAuthService]},
    {path:'user',component:UserhomepageComponent, canActivate:[UserAuthService]},
    {path:'aboutus',component:AboutusComponent, canActivate:[UserAuthService]},
    {path:'cart',component:CartComponent, canActivate:[UserAuthService]},

    {path:'orders',component:OrderDetailsComponent, canActivate:[UserAuthService]},
    {path:'profile',component:ProfileComponent, canActivate:[UserAuthService]},
    {path:':id',component:ProductdetailsComponent, canActivate:[UserAuthService]},
    {path:'product',component:ProductComponent, canActivate:[UserAuthService]},
    {path:'product/:id',component:ProductdetailsComponent, canActivate:[UserAuthService]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingmodule{}
