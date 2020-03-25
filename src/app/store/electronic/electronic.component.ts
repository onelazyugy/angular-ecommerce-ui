import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ElectronicService } from 'src/app/service/electronic.service';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit, OnDestroy {
  electronicServiceSubscription: Subscription;
  electronics: Item[];
  
  constructor(private router: Router, private electronicService: ElectronicService) { 
    const currentRouteUrl = this.router.url;
    console.log(currentRouteUrl);
  }

  ngOnInit() {
    this.electronicServiceSubscription = this.electronicService.fetchElectronicDetials().subscribe(electronicResponse => {
      this.electronics = electronicResponse.electronicItems;
      // emit this data to which ever component that needs it 
      this.electronicService.emitElectronicDetials(electronicResponse);
    }, error =>{
      // show ui some error
      console.error('fetchElectronicDetials error:', error)
    },() =>{

    })
  }

  ngOnDestroy(): void {
    this.electronicServiceSubscription.unsubscribe();
  }
}
