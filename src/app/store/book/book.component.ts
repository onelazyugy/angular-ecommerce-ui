import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books = [
    {'id': 1, 'name': 'Book Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'},
    {'id': 2, 'name': 'Book Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'},
    {'id': 3, 'name': 'Book Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'},
    {'id': 4, 'name': 'Book Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'},
    {'id': 5, 'name': 'Book Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'},
    {'id': 6, 'name': 'Book Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
