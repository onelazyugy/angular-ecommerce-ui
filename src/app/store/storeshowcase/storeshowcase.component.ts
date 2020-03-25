import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/model/item.model';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-storeshowcase',
  templateUrl: './storeshowcase.component.html',
  styleUrls: ['./storeshowcase.component.css']
})
export class StoreshowcaseComponent implements OnInit, OnDestroy {
  storeServiceSubscription: Subscription;
  mostViewedItems: Item[];
  recentlyViewedItems: Item[];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeServiceSubscription = this.storeService.fetchStoreDetials().subscribe(storeResponse => {
      this.mostViewedItems = storeResponse.mostViewedItems;
      this.recentlyViewedItems = storeResponse.recentlyViewedItems;
      // emit this data to which ever component that needs it 
      this.storeService.emitStoreDetials(storeResponse);
    }, error =>{
      // show ui some error
      console.error('fetchStoreDetials error:', error)
    },() =>{

    })
  }
  
  ngOnDestroy(): void {
    this.storeServiceSubscription.unsubscribe();
  }

}
