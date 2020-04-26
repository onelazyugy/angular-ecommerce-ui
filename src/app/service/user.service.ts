import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
// import { UserDetail } from '../model/DEL_user.detail.model';
import { LoginUserResponse } from '../model/response/login-user-response.model';
import { SignupUserResponse } from '../model/response/signup-user-response.model';
import { SignUpUserRequest } from '../model/request/signup-user-request.model';
import { LoginUserRequest } from '../model/request/login-user-request.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User;
    private userSubject$ = new BehaviorSubject<User>(this.user);
    userChange$ = this.userSubject$.asObservable();
    isLoggedIn = false;
    
    constructor(private http: HttpClient){}

    signup(user: SignUpUserRequest): Observable<SignupUserResponse> {
        return this.http.post<SignupUserResponse>(environment.signupUrl, user)
        .pipe(
            map(data => new SignupUserResponse().deserialize(data)),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    login(user: LoginUserRequest): Observable<LoginUserResponse> {
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