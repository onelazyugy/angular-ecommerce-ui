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

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    this.userService.login(this.user).subscribe(response =>{
      if(response.status.statusCd === 200 && response.success) {
        this.loginForm.reset();
        //put in localstorage
        localStorage.setItem("user", JSON.stringify(response.user));
        this.userService.emitLoginUserDetail(response.user);
        this.router.navigate(['/']);
      } else {
        //TODO: display error message
      }
    }, error =>{
      console.error(error);
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
