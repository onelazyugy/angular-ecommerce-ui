import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ElectronicResponse } from '../model/response/electronic-response.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ElectronicService {
    electronic: ElectronicResponse;
    private electronicSubject$ = new BehaviorSubject<ElectronicResponse>(this.electronic);
    electronicChange$ = this.electronicSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchElectronicDetials(): Observable<ElectronicResponse> {
        return this.http.get<ElectronicResponse>(environment.electronicUrl)
        .pipe(
            map(data => new ElectronicResponse().deserialize(data)),
            catchError(error => {
                console.log('fetchElectronicDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitElectronicDetials(electronic: ElectronicResponse) {
        this.electronicSubject$.next(electronic);
    }
}