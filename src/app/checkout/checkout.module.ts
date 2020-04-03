import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CheckoutComponent } from './checkout.component';

@NgModule({
    declarations: [
        CheckoutComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class CheckoutModule {}