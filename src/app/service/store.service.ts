import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from '../model/store.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    store: Store;
    private storeSubject$ = new BehaviorSubject<Store>(this.store);
    storeChange$ = this.storeSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchStoreDetials(): Observable<Store> {
        return this.http.get<Store>(environment.storeUrl)
        .pipe(
            map(data => new Store().deserialize(data)),
            catchError(error => {
                console.log('fetchStoreDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitStoreDetials(store: Store) {
        this.storeSubject$.next(store);
    }
}