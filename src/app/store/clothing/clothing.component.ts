import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { Subscription } from 'rxjs';
import { ClothingService } from 'src/app/service/clothing.service';
import { ClothingResponse } from 'src/app/model/response/clothing-response.model';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit, OnDestroy {
  clothes: Item[];
  clothingServiceSubscription: Subscription;

  constructor(private clothingService: ClothingService) { }

  ngOnInit() {
    this.clothingServiceSubscription = this.clothingService.fetchClothingDetials().subscribe((clothingResponse: ClothingResponse) => {
      this.clothes = clothingResponse.clothingItems;
      // emit this data to which ever component that needs it 
      this.clothingService.emitClothingDetials(clothingResponse);
    }, error =>{
      // show ui some error
      console.error('fetchClothingDetials error:', error)
    },() =>{

    })
  }

  ngOnDestroy(): void {
    this.clothingServiceSubscription.unsubscribe();
  }
}
