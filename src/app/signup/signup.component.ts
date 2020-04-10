import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';

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
  userSignupSubscription: Subscription;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.confirmPassword = this.signupForm.value.confirmPassword;
    //TODO: validation
    this.userSignupSubscription = this.userService.signup(this.user).subscribe(response => {
      if(response.status.statusCd === 200 && response.success) {
        this.signupForm.reset();
        this.router.navigate(['/login']);
      } else {
        //TODO: display some error
      }
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
    if(this.userSignupSubscription !== undefined) {
      this.userSignupSubscription.unsubscribe();
    }
  }
}
