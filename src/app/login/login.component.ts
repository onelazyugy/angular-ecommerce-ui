import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('loginForm', {static: false}) loginForm: NgForm;
  user = {
    email: '',
    password: ''
  }
  loginSubscription: Subscription;
  message: string;
  isError: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    this.userService.login(this.user).subscribe(response =>{
      if(response && response.status !== undefined && response.status.statusCd === 200 && response.success) {
        this.loginForm.reset();
        localStorage.setItem("user", JSON.stringify(response.user));
        this.userService.emitLoginUserDetail(response.user);
        this.router.navigate(['/']);
      } else {
        this.isError = true;
        this.message = 'invalid login, please try again!';
      }
    }, error =>{
      this.isError = true;
      this.message = error.error.message;
    });
  }

  signup() {
    this.router.navigate(['/sign-up']);
  }

  ngOnDestroy(): void {
    if(this.loginSubscription !== undefined) {
      this.loginSubscription.unsubscribe();
    }
  }
}
