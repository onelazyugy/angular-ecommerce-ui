import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Subscription } from 'rxjs';
import { CartDetail } from '../model/cart.detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cartServiceSubscription: Subscription;
  cartDetails: CartDetail[] = [];
  isCartEmpty: boolean = false;
  totalItem: number = 0;
  subTotal: number = 0;
  totalTax: number = 0;
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartServiceSubscription = this.cartService.cartChange$.subscribe((cartDetails: CartDetail[]) => {
      this.cartDetails = cartDetails;
      this.isCartEmpty = this.cartDetails.length === 0 ? true : false;
      this.totalItem = this.cartDetails.length;
      this.subTotal = 0;
      if(!this.isCartEmpty) {
        this.cartDetails.map(detail=>{
          const qty = detail.qty;
          const price = detail.item.price;
          this.subTotal = (this.subTotal + (qty * price));
        })
      }
      this.totalTax = (this.subTotal * .07);
      this.total = (this.totalTax + this.subTotal)
    }, error => {
      //TODO: error on ui
    });
  }

  submitOrder() {
    //TODO: need to call /submit-order api. call only if jwt is present, so need a guard to check so that the interceptor can send the token
    this.router.navigate(['/complete']);
  }

  ngOnDestroy(): void {
    this.cartServiceSubscription.unsubscribe();
  }
}
