import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import { UserDetail } from '../model/user.detail.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User;
    private userSubject$ = new BehaviorSubject<User>(this.user);
    userChange$ = this.userSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    signup(user: any): Observable<UserDetail> {
        return this.http.post<UserDetail>(environment.signuplUrl, user)
        .pipe(
            map(data => new UserDetail().deserialize(data)),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    // emitBookDetials(book: Book) {
    //     this.bookSubject$.next(book);
    // }
}