import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundModule } from './pagenotfound/pagenotfound.module';
import { HomeModule } from './home/home.module';
import { StoreModule } from './store/store.module';
import { CartModule } from './cart/cart.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CheckoutModule } from './checkout/checkout.module';
import { CompleteModule } from './complete/complete.module';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './signup/signup.module';
import { HttpRequestInterceptor } from './helper/http-request.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PageNotFoundModule,
    HomeModule,
    StoreModule,
    CartModule,
    ToolbarModule,
    CheckoutModule,
    CompleteModule,
    LoginModule,
    SignUpModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
