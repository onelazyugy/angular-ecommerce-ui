import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Subscription } from 'rxjs';
import { ItemDetail } from 'src/app/model/item.detail.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CartDetail } from 'src/app/model/cart.detail.model';
import { AddItemToCartResponse } from 'src/app/model/response/add-item-to-cart-response.model';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit, OnDestroy {
  itemServiceSubscription: Subscription;
  itemDetail: ItemDetail;
  itemDetailsRouteParam: any;
  qtySelected: number;
  isAddItemToCartSuccess: boolean;
  qty = [{name: 1, value: 1}, {name: 2, value: 2}, {name: 3, value: 3}, {name: 4, value: 4}, 
        {name: 5, value: 5}, {name: 6, value: 6}, {name: 7, value: 7}, {name: 8, value: 8}, 
        {name: 9, value: 9}, {name: 10, value: 10}];

  constructor(private router: ActivatedRoute, private itemService: ItemService, private cartService: CartService) { 
    this.router.params.subscribe(routeParam => {
      this.itemDetailsRouteParam = routeParam;
    })
  }

  ngOnInit() {
    this.itemServiceSubscription = this.itemService.fetchItemDetials(this.itemDetailsRouteParam).subscribe((itemDetailResponse: ItemDetail) =>{
      this.itemDetail = itemDetailResponse;
    }, error =>{
      // show ui some error
      console.error('fetchItemDetials error:', error)
    },() =>{

    })
  }

  addToCart() {
    //guarantee to exist if user has logged in
    const id = JSON.parse(localStorage.getItem('user')).id;
    const email = JSON.parse(localStorage.getItem('user')).email;
    let user = {id: id, email: email};
    const item = {item: this.itemDetail.item, qty: this.qtySelected, user: user};
    let cartDeatil = new CartDetail().deserialize(item);
    
    
    //TODO: local storage for guess user?

    
    this.cartService.addItemToCart(cartDeatil).subscribe((response: AddItemToCartResponse) => {
      console.log('added item to cart: ', response);
      //TODO: 
      if(response.status.statusCd === 200) {
        this.cartService.emitCart(cartDeatil);
        this.isAddItemToCartSuccess = true;
      }
    }, error => {
      //TODO:
      this.isAddItemToCartSuccess = false;
    });
    
  }

  close() {
    this.isAddItemToCartSuccess = false;
  }

  selectChangeHandler(event) {
    this.qtySelected = parseInt(event.target.value);
  }

  ngOnDestroy(): void {
    this.itemServiceSubscription.unsubscribe();
  }
}
