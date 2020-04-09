import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  @ViewChild('signupForm', {static: false}) signupForm: NgForm;
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  userSubscription: Subscription;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    // TODO: this.user, need to use User instead of any over service layer
    this.userSubscription = this.userService.signup(this.user).subscribe(user => {
      console.log('signup response:', user);
      this.signupForm.reset();
    }, error =>{
      console.error(error);
    })
  }

  login() {
    this.router.navigate(['/login']);
    
    // --ways to programmatically populate the form
    // first approach
    // this.signupForm.controls['password'].setValue("some long email");

    // second approach
    // this.signupForm.form.patchValue({
    //   email: 'xx',
    //   password: 'xx',
    //   confirmPassword: 'xxx'
    // });

  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
