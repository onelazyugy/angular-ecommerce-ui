import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  toolbarItems = {
    title: 'angular-ecommerce',
    menus: [
      {id: '1', name: 'HOME', route: '', icon: 'home icon'},
      {id: '2', name: 'STORE', route: '/store', icon: 'shopping basket icon'},
      {id: '3', name: 'CART', route: '/cart', icon: 'shopping cart icon'}
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
