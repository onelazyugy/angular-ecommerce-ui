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
    private homeSubject$ = new BehaviorSubject<Home>(this.home);
    homeChange$ = this.homeSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchHomeDetials(): Observable<Home> {
        return this.http.get<Home>(environment.homeUrl)
        .pipe(
            map(data => new Home().deserialize(data)),
            catchError(error => {
                console.log('fetchHomeDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitHomeDetials(home: Home) {
        this.homeSubject$.next(home);
    }
}