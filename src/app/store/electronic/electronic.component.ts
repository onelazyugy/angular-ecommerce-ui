import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {
  electronics = [
    {'id': 1, 'name': 'iphone 11', 'link': 'www.google.com', 'imgurl': 'https://www.boostmobile.com/amp/img/iphone-11/IPH11BT64BLK/image.jpg'},
    {'id': 2, 'name': 'iphone xs max', 'link': 'www.google.com', 'imgurl': 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg'},
    {'id': 3, 'name': 'iphone 11', 'link': 'www.google.com', 'imgurl': 'https://static.bhphoto.com/images/images500x500/apple_mvvk2ll_a_16_macbook_pro_late_1573663014_1520435.jpg'}
  ]
  constructor() { }

  ngOnInit() {

  }

}
