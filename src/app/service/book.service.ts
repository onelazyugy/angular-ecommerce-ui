import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Book } from '../model/book.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    book: Book;
    private bookSubject$ = new BehaviorSubject<Book>(this.book);
    bookChange$ = this.bookSubject$.asObservable();
    
    constructor(private http: HttpClient){}

    fetchBookDetials(): Observable<Book> {
        return this.http.get<Book>(environment.bookUrl)
        .pipe(
            map(data => new Book().deserialize(data)),
            catchError(error => {
                console.log('fetchBookDetials: error and rethrowing it...', error);
                return throwError(error);
            })
        );
    }

    emitBookDetials(book: Book) {
        this.bookSubject$.next(book);
    }
}