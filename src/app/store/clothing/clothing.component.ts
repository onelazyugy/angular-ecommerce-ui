import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  clothes = [
    {'id': 1, 'name': 'Clothes Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'},
    {'id': 2, 'name': 'Clothes Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'},
    {'id': 3, 'name': 'Clothes Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'},
    {'id': 4, 'name': 'Clothes Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'},
    {'id': 5, 'name': 'Clothes Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'},
    {'id': 6, 'name': 'Clothes Title', 'imgurl': 'https://semantic-ui.com/images/wireframe/image.png'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
