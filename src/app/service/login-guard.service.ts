import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginRouteGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean {
        // if jwt token exist, redirect to home screen, else go to login screen
        // this is the case where user is already logged in but try to access /login route
        if(JSON.parse(localStorage.getItem('user')) !== null && JSON.parse(localStorage.getItem('user')).token.accessToken) {
            this.router.navigate(['/']);
        } else {
            return true;
        }
      }
}
