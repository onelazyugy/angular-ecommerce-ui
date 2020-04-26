import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HomeResponse } from '../model/response/home-response.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    home: HomeResponse;
    private homeSubject$ = new BehaviorSubject<HomeResponse>(this.home);
    homeChange$ = this.homeSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchHomeDetials(): Observable<HomeResponse> {
        return this.http.get<HomeResponse>(environment.homeUrl)
        .pipe(
            map(data => new HomeResponse().deserialize(data)),
            catchError(error => {
                console.log('fetchHomeDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitHomeDetials(home: HomeResponse) {
        this.homeSubject$.next(home);
    }
}