import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.userService.userChange$.subscribe(user => {
      if(user === undefined && localStorage.getItem('user')) {
        this.loggedInUser = JSON.parse(localStorage.getItem('user'));
      } else {
        this.loggedInUser = user;
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.loggedInUser = undefined;
  }

  ngOnDestroy(): void {
    if(this.userSubscription !== undefined) {
      this.userSubscription.unsubscribe();
    }
  }
}
