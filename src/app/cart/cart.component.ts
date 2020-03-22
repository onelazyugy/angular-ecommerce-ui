import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Subscription } from 'rxjs';
import { Home } from '../model/home.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  homeServiceSubscription: Subscription;
  homeResponse: Home;

  constructor(private homeService: HomeService) { }
  
  ngOnInit() {
    this.homeServiceSubscription = this.homeService.homeChange$.subscribe(homeResponse => {
      console.log('CART: ', homeResponse);
      this.homeResponse = homeResponse;
    }, error => {

    });
  }

  ngOnDestroy(): void {
    this.homeServiceSubscription.unsubscribe();
  }
}
