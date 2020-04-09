import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AppRoutingModule
    ]
})
export class SignUpModule {}