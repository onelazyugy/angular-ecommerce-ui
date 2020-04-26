import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StoreResponse } from '../model/response/store-response.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    store: StoreResponse;
    private storeSubject$ = new BehaviorSubject<StoreResponse>(this.store);
    storeChange$ = this.storeSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchStoreDetials(): Observable<StoreResponse> {
        return this.http.get<StoreResponse>(environment.storeUrl)
        .pipe(
            map(data => new StoreResponse().deserialize(data)),
            catchError(error => {
                console.log('fetchStoreDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitStoreDetials(store: StoreResponse) {
        this.storeSubject$.next(store);
    }
}