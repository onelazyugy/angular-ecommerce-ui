import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Electronic } from '../model/electronic.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ElectronicService {
    electronic: Electronic;
    private electronicSubject$ = new BehaviorSubject<Electronic>(this.electronic);
    electronicChange$ = this.electronicSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchElectronicDetials(): Observable<Electronic> {
        return this.http.get<Electronic>(environment.electronicUrl)
        .pipe(
            map(data => new Electronic().deserialize(data)),
            catchError(error => {
                console.log('fetchElectronicDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitElectronicDetials(electronic: Electronic) {
        this.electronicSubject$.next(electronic);
    }
}