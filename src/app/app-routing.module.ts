import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { ElectronicComponent } from './store/electronic/electronic.component';
import { BookComponent } from './store/book/book.component';
import { ClothingComponent } from './store/clothing/clothing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'store', 
    component: StoreComponent,
    children: [
      { path: 'electronics', component: ElectronicComponent},
      { path: 'books', component: BookComponent},
      { path: 'clothes', component: ClothingComponent}
    ] 
  },
  {
    path: 'cart', 
    component: CartComponent
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
