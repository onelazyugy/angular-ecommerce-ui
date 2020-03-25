import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { BookService } from 'src/app/service/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  books: Item[];
  bookServiceSubscription: Subscription;

  constructor(private bookService: BookService) { }
  
  ngOnInit() {
    this.bookServiceSubscription = this.bookService.fetchBookDetials().subscribe(bookResponse => {
      this.books = bookResponse.bookItems;
      // emit this data to which ever component that needs it 
      this.bookService.emitBookDetials(bookResponse);
    }, error =>{
      // show ui some error
      console.error('fetchBookDetials error:', error)
    },() =>{

    })
  }

  ngOnDestroy(): void {
    this.bookServiceSubscription.unsubscribe();
  }
}
