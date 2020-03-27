import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Subscription } from 'rxjs';
import { ItemDetail } from 'src/app/model/item.detail.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit, OnDestroy {
  itemServiceSubscription: Subscription;
  itemDetail: ItemDetail;

  constructor(private router: ActivatedRoute, private itemService: ItemService) { 
    const currentRouteUrl = this.router.url;
    console.log(currentRouteUrl);
  }

  ngOnInit() {
    this.itemServiceSubscription = this.itemService.fetchItemDetials().subscribe((itemDetailResponse: ItemDetail) =>{
      this.itemDetail = itemDetailResponse;
      console.log('fetchItemDetials:', itemDetailResponse);
    // emit this data to which ever component that needs it 
      this.itemService.emitItemDetials(itemDetailResponse);
    }, error =>{
      // show ui some error
      console.error('fetchItemDetials error:', error)
    },() =>{

    })
  }

  ngOnDestroy(): void {
    this.itemServiceSubscription.unsubscribe();
  }
}
