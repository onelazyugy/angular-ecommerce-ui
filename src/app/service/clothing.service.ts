import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ClothingResponse } from '../model/response/clothing-response.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClothingService {
    clothing: ClothingResponse;
    private clothingSubject$ = new BehaviorSubject<ClothingResponse>(this.clothing);
    clothingChange$ = this.clothingSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchClothingDetials(): Observable<ClothingResponse> {
        return this.http.get<ClothingResponse>(environment.clothingUrl)
        .pipe(
            map(data => new ClothingResponse().deserialize(data)),
            catchError(error => {
                console.log('fetchClothingDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitClothingDetials(clothing: ClothingResponse) {
        this.clothingSubject$.next(clothing);
    }
}