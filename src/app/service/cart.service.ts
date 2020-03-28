import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { ItemService } from './item.service';
import { Item } from '../model/item.model';
import { CartDetail } from '../model/cart.detail.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartSubject$ = new BehaviorSubject<Object>(CartDetail);
    cartChange$ = this.cartSubject$.asObservable();
    
    constructor(private itemService: ItemService){}

    emitItemAddedToCart(itemToAddToCart: CartDetail) {
        this.cartSubject$.next(itemToAddToCart);
    }
}