import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../model/item.model';
import { ItemService } from '../service/item.service';
import { CartService } from '../service/cart.service';
import { CartDetail } from '../model/cart.detail.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  currentItemInCart: Item[];
  cartServiceSubscription: Subscription;
  cartDetail: CartDetail[] = [];

  constructor(private cartService: CartService) { }
  
  ngOnInit() {
    this.cartServiceSubscription = this.cartService.cartChange$.subscribe((itemInCartDetail: CartDetail) => {
      console.log('itemInCartDetail: ', itemInCartDetail);
      this.cartDetail.push(itemInCartDetail);
    }, error => {

    });
  }

  ngOnDestroy(): void {
    this.cartServiceSubscription.unsubscribe();
  }
}
