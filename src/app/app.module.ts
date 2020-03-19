import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundModule } from './pagenotfound/pagenotfound.module';
import { HomeModule } from './home/home.module';
import { StoreModule } from './store/store.module';
import { CartModule } from './cart/cart.module';
import { ToolbarModule } from './toolbar/toolbar.module';

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
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
