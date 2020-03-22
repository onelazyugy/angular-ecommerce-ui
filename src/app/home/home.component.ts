import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Subscription } from 'rxjs';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  homeServiceSubscription: Subscription;
  newArrivalItems: Item[];
  discountedItems: Item[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeServiceSubscription = this.homeService.fetchHomeDetials().subscribe(homeResponse => {
      console.log('home response:', homeResponse);
      this.newArrivalItems = homeResponse.newArrivalItems;
      this.discountedItems = homeResponse.discountedItems;
      // emit this data to which ever component that needs it 
      this.homeService.emitHomeDetials(homeResponse);
    }, error => {
      console.error('error fetchHomeDetials:', error);
    }, () =>{

    });
  }

  ngOnDestroy() {
    this.homeServiceSubscription.unsubscribe();
  }
}
