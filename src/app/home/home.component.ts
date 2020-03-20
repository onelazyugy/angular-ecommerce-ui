import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  homeServiceSubscription: Subscription;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeServiceSubscription = this.homeService.fetchHomeDetials().subscribe(response => {
      console.log('home response:', response);
    }, error => {
      console.error('error fetchHomeDetials:', error);
    }, () =>{

    });
  }

  ngOnDestroy() {
    this.homeServiceSubscription.unsubscribe();
  }
}
