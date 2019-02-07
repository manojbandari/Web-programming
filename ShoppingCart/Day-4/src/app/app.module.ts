import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CartComponent } from './cart/cart.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeProductDetailsComponent } from './home-product-details/home-product-details.component';
import { LoginComponent } from './login-sign-up/login/login.component';
import { SignupComponent } from './login-sign-up/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
     
    CartComponent,
    LoginSignUpComponent,
    ProductDetailsComponent,
    HomeProductDetailsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
