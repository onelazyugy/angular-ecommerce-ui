import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ItemDetail } from '../model/item.detail.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    itemDetail: ItemDetail;
    private itemDetailSubject$ = new BehaviorSubject<ItemDetail>(this.itemDetail);
    itemDetailChange$ = this.itemDetailSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchItemDetials(itemDetailsRouteParam: any): Observable<ItemDetail> {
        return this.http.get<ItemDetail>(`${environment.itemDetailUrl}/${itemDetailsRouteParam.id}/${itemDetailsRouteParam.category}`)
        .pipe(
            map(data => new ItemDetail().deserialize(data)),
            catchError(error => {
                console.log('fetchItemDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitItemDetials(item: ItemDetail) {
        this.itemDetailSubject$.next(item);
    }
}