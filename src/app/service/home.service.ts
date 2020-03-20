import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Home } from '../model/home.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    home: Home;
    private catalogSubject$ = new BehaviorSubject<Home>(this.home);
    catalogChange$ = this.catalogSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchHomeDetials(): Observable<Home> {
        return this.http.get<Home>(environment.homeUrl)
        .pipe(
            map(data => new Home().deserialize(data)),
            catchError(error => {
                console.log('Handling error and rethrowing it...', error);
                return throwError(error);
            })
        );

        // return this.http.get<Home>(url).pipe(
        // map(data => new Home().deserialize(data)),
        // catchError(() => throwError('User not found')));

        // return this.http.get(url).pipe(map((res:Response) => res.json())
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error')));

        // return this.http.get(url).map((res:Response) => res.json())
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }
}