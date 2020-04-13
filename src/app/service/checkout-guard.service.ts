import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CheckoutRouteGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean {
        //TODO: get jwt from localStorage and validate if expire or not yet 
        if(localStorage.getItem('user') !== null) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
      }
}
