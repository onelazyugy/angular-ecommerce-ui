import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CompleteComponent } from './complete.component';

@NgModule({
    declarations: [
        CompleteComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class CompleteModule {}