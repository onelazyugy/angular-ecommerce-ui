import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Clothing } from '../model/clothing.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClothingService {
    clothing: Clothing;
    private clothingSubject$ = new BehaviorSubject<Clothing>(this.clothing);
    clothingChange$ = this.clothingSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchClothingDetials(): Observable<Clothing> {
        return this.http.get<Clothing>(environment.clothingUrl)
        .pipe(
            map(data => new Clothing().deserialize(data)),
            catchError(error => {
                console.log('fetchClothingDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitClothingDetials(clothing: Clothing) {
        this.clothingSubject$.next(clothing);
    }
}