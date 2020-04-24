import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    private AUTH_HEADER = "Authorization";
    routeParam: any;
    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.addAuthenticationToken(request);
        return next.handle(request);
    }

    addAuthenticationToken(request) {
        const accessToken = JSON.parse(localStorage.getItem('user')) === null ? null : JSON.parse(localStorage.getItem('user')).accessToken;
        // no need to send token since this is login
        if (accessToken === null && this.router.url === '/login') {
            return request;
        } 
        // before submitting the order, make sure you sent the jwt to the backend 
        else if(accessToken !== null && this.router.url === '/submit-order'){
            return request.clone({
                headers: request.headers.set(this.AUTH_HEADER, "Bearer " + accessToken)
            });
        } 
        // everything else, no need to send jwt token
        else {
            return request;
        }
    }
}