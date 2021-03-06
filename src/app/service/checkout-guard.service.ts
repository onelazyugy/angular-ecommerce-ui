import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CheckoutRouteGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean {
        // if no jwt token, redirect to /login, else process to checkout screen
        if(JSON.parse(localStorage.getItem('user')) !== null && JSON.parse(localStorage.getItem('user')).token.accessToken) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
      }
}
