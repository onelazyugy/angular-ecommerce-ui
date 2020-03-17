import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  isStoreRouteOnly:boolean = false;

  categories = [
    {id: '1', name: 'ELECTRONICS', route: '/store/electronics', icon: 'shopping cart icon'},
    {id: '2', name: 'BOOKS', route: '/store/books', icon: 'shopping cart icon'},
    {id: '3', name: 'CLOTHING', route: '/store/clothes', icon: 'shopping cart icon'},
  ];
  constructor() { 
  }

  ngOnInit() {
  }

}
