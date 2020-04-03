import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { ElectronicComponent } from './store/electronic/electronic.component';
import { BookComponent } from './store/book/book.component';
import { ClothingComponent } from './store/clothing/clothing.component';
import { ItemdetailComponent } from './store/itemdetail/itemdetail.component';
import { StoreshowcaseComponent } from './store/storeshowcase/storeshowcase.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'store', 
    component: StoreComponent,
    children: [
      // { path: 'electronics', component: ElectronicComponent, children: [
      //   {path: ':id', component: ItemdetailComponent}
      // ]},
      { path: '', component: StoreshowcaseComponent},
      { path: 'electronics', component: ElectronicComponent},
      { path: 'books', component: BookComponent},
      { path: 'clothes', component: ClothingComponent},
      { path: 'electronics/:id', component: ItemdetailComponent },
      { path: 'books/:id', component: ItemdetailComponent },
      { path: 'clothes/:id', component: ItemdetailComponent }
    ] 
  },
  {
    path: 'item/:id/:category',
    component: ItemdetailComponent
  },
  {
    path: 'cart', 
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'complete',
    component: CompleteComponent
  },
  {
    path: 'not-found', 
    component: PagenotfoundComponent, 
    data: {message: 'page not found!'}
  },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
