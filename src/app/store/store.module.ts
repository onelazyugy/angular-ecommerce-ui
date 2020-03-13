import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { AppRoutingModule } from '../app-routing.module';
import { BookComponent } from './book/book.component';
import { ClothingComponent } from './clothing/clothing.component';

@NgModule({
    declarations: [
        StoreComponent,
        ElectronicComponent,
        BookComponent,
        ClothingComponent
    ],
    imports: [
        CommonModule, //ngFor
        AppRoutingModule
    ]
})
export class StoreModule {}