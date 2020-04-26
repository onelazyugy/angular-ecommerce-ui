import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
// import { UserDetail } from '../model/DEL_user.detail.model';
import { LoginUserResponse } from '../model/response/login-user-response.model';
import { SignupUserResponse } from '../model/response/signup-user-response.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User;
    private userSubject$ = new BehaviorSubject<User>(this.user);
    userChange$ = this.userSubject$.asObservable();
    isLoggedIn = false;
    
    constructor(private http: HttpClient){}

    signup(user: any): Observable<SignupUserResponse> {
        return this.http.post<SignupUserResponse>(environment.signupUrl, user)
        .pipe(
            map(data => new SignupUserResponse().deserialize(data)),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    login(user: any): Observable<LoginUserResponse> {
        return this.http.post<LoginUserResponse>(environment.loginUrl, user)
        .pipe(
            map(data => new LoginUserResponse().deserialize(data)),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    logout() {
        this.userSubject$.next(null);
    }

    emitLoginUserDetail(user: User) {
        this.userSubject$.next(user);
    }
}