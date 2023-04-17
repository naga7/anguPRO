import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { HelpsComponent } from './pages/helps/helps.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { OrderComponent } from './pages/order/order.component';
;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    LoginComponent,
    CartComponent,
    HelpsComponent,
    ProductComponent,
    RegisterComponent,
    OrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
