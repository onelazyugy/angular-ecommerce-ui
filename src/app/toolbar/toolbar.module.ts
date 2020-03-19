import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        CommonModule, //ngFor
        AppRoutingModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule {}