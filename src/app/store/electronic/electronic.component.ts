import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {
  electronics = [
    {'id': 1, 'name': 'Electronic Title', 'imgurl': 'https://semantic-ui.com/images/avatar/large/daniel.jpg'},
    {'id': 2, 'name': 'Electronic Title', 'imgurl': 'https://semantic-ui.com/images/avatar/large/helen.jpg'},
    {'id': 3, 'name': 'Electronic Title', 'imgurl': 'https://semantic-ui.com/images/avatar/large/elliot.jpg'},
    {'id': 4, 'name': 'Electronic Title', 'imgurl': 'https://semantic-ui.com/images/avatar/large/elliot.jpg'},
    {'id': 5, 'name': 'Electronic Title', 'imgurl': 'https://semantic-ui.com/images/avatar/large/elliot.jpg'},
    {'id': 6, 'name': 'Electronic Title', 'imgurl': 'https://semantic-ui.com/images/avatar/large/elliot.jpg'}
  ]
  constructor(private router: Router) { 
    const currentRouteUrl = this.router.url;
    console.log(currentRouteUrl);
  }

  ngOnInit() {

  }

}
