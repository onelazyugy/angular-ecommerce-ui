import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { CartDetail } from '../model/cart.detail.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  toolbarItems = {
    title: 'angular-ecommerce',
    menus: [
      {id: '1', name: 'HOME', route: '', icon: 'home icon'},
      {id: '2', name: 'STORE', route: '/store', icon: 'shopping basket icon'},
      {id: '3', name: 'CART', route: '/cart', icon: 'shopping cart icon'}
    ]
  }
  loggedInUser: User;
  userSubscription: Subscription;
  cartServiceSubscription: Subscription;
  totalItem: number = 0;

  constructor(private userService: UserService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.userService.userChange$.subscribe(user => {
      if(user === undefined && localStorage.getItem('user')) {
        this.loggedInUser = JSON.parse(localStorage.getItem('user'));
      } else {
        this.loggedInUser = user;
      }
    });

    this.cartServiceSubscription = this.cartService.cartChange$.subscribe((cartDetails: CartDetail[]) =>{
      this.totalItem = cartDetails.length;
    }, error => {
      console.error(error);
    })
  }

  logout() {
    this.userService.logout();
    localStorage.removeItem('user');
    localStorage.removeItem('lastRoute');
    this.router.navigate(['/login']);
    this.loggedInUser = undefined;
  }

  ngOnDestroy(): void {
    if(this.userSubscription !== undefined) {
      this.userSubscription.unsubscribe();
    }
    if(this.cartServiceSubscription !== undefined) {
      this.cartServiceSubscription.unsubscribe();
    }
  }
}
