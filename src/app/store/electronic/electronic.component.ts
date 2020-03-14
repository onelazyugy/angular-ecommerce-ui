import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {
  electronics = [
    {'id': 1, 'name': 'Item Title', 'link': 'www.google.com', 'imgurl': 'https://semantic-ui.com/images/avatar/large/daniel.jpg'},
    {'id': 2, 'name': 'Item Title', 'link': 'www.google.com', 'imgurl': 'https://semantic-ui.com/images/avatar/large/helen.jpg'},
    {'id': 3, 'name': 'Item Title', 'link': 'www.google.com', 'imgurl': 'https://semantic-ui.com/images/avatar/large/elliot.jpg'},
    {'id': 4, 'name': 'Item Title', 'link': 'www.google.com', 'imgurl': 'https://semantic-ui.com/images/avatar/large/elliot.jpg'},
    {'id': 5, 'name': 'Item Title', 'link': 'www.google.com', 'imgurl': 'https://semantic-ui.com/images/avatar/large/elliot.jpg'},
    {'id': 6, 'name': 'Item Title', 'link': 'www.google.com', 'imgurl': 'https://semantic-ui.com/images/avatar/large/elliot.jpg'}
  ]
  constructor() { }

  ngOnInit() {

  }

}
