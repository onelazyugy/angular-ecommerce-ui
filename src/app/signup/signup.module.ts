import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class SignUpModule {}