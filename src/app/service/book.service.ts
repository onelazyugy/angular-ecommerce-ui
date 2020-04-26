import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BookResponse } from '../model/response/book-response.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    book: BookResponse;
    private bookSubject$ = new BehaviorSubject<BookResponse>(this.book);
    bookChange$ = this.bookSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchBookDetials(): Observable<BookResponse> {
        return this.http.get<BookResponse>(environment.bookUrl)
        .pipe(
            map(data => new BookResponse().deserialize(data)),
            catchError(error => {
                console.log('fetchBookDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitBookDetials(book: BookResponse) {
        this.bookSubject$.next(book);
    }
}