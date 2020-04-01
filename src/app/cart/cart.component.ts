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
  cartDetails: CartDetail[] = [];
  isCartEmpty: boolean = false;
  totalItem: number = 0;
  subTotal: number = 0;

  constructor(private cartService: CartService) { }
  
  ngOnInit() {
    this.cartServiceSubscription = this.cartService.cartChange$.subscribe((cartDetails: CartDetail[]) => {
      this.cartDetails = cartDetails;
      this.isCartEmpty = this.cartDetails.length === 0 ? true : false;
      this.totalItem = this.cartDetails.length;
      if(!this.isCartEmpty) {
        this.cartDetails.map(detail=>{
          const qty = detail.qty;
          const price = detail.item.price;
          this.subTotal = (this.subTotal + (qty * price));
        })
      }
    }, error => {
      //TODO: error on ui
    });
  }

  ngOnDestroy(): void {
    this.cartServiceSubscription.unsubscribe();
  }
}
