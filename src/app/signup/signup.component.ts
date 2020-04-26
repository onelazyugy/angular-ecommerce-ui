import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';
import { SignUpUserRequest } from '../model/request/signup-user-request.model';

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
  message: string;
  isError: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.confirmPassword = this.signupForm.value.confirmPassword;
    //TODO: validation
    const signupUserRequest: SignUpUserRequest = new SignUpUserRequest().deserialize(this.user);
    this.userSignupSubscription = this.userService.signup(signupUserRequest).subscribe(response => {
      if(response && response.status !== undefined && response.status.statusCd === 200) {
        this.signupForm.reset();
        this.router.navigate(['/login']);
      } else {
        this.isError = true;
        this.message = 'please try again!';
      }
    }, error =>{
      this.isError = true;
      this.message = error.error.message;
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
