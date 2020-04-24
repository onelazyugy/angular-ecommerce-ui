import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { CartDetail } from '../model/cart.detail.model';
import _ from 'lodash';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AddItemToCartRequest } from '../model/add-item-to-cart-request.model';
import { AddItemToCartResponse } from '../model/add-item-to-cart-response.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartSubject$ = new BehaviorSubject<Object>(CartDetail);
    cartChange$ = this.cartSubject$.asObservable();
    private cartDetails: CartDetail[] = [];
    
    constructor(private http: HttpClient){}

    addItemToCart(cartDetail: CartDetail): Observable<AddItemToCartResponse> {
        return this.http.post<AddItemToCartRequest>(environment.addItemToCartUrl, cartDetail)
        .pipe(
            map(data => new AddItemToCartResponse().deserialize(data)),
            catchError(error => {
                return throwError(error);
            })
        ) 
    }

    emitCart(cartDetail: CartDetail) {
        this.cartDetails.push(cartDetail);
        this.cartSubject$.next(this.cartDetails);
    }

    removeItem(cartDetail: CartDetail) {
        this.cartDetails = _.pull(this.cartDetails, cartDetail);
        this.cartSubject$.next(this.cartDetails);
    }

    
}