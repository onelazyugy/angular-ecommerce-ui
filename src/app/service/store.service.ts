import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StoreService {
    
    constructor(private http: HttpClient){}

    // fetchStoreDetials(): Observable<HttpResponse<Store>> {
        // const url = 'http://localhost:3001/ecommerce/api/v1/store';
        // return this.http.get<Store>(url, {observe: 'response'});

        // return this.http.get(url).pipe(map((res:Response) => res.json())
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error')));

        // return this.http.get(url).map((res:Response) => res.json())
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    // }
}