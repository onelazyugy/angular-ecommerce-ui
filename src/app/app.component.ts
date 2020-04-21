import { Component, ViewChild, TemplateRef, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

import { IdleService } from './service/idle.service';
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(private idle: Idle, private keepalive: Keepalive, private router: Router, private idleService: IdleService) {
      // sets an idle timeout of 15 minute, for testing purposes.
    idle.setIdle(900); //900
    // set the count down after the modal has opened
    idle.setTimeout(5); //5 seconds
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => { 
      this.idleState = 'No longer idle.'
      console.log(this.idleState);
      this.reset();
    });
    
    idle.onTimeout.subscribe(() => {
      $('.ui.modal')
        .modal('hide')
      ;

      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);
      //clear token before going to login in otherwise login guard will redirect to '/' route
      //TODO: need to trigger toolbar compnent to remove display email
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
    
    idle.onIdleStart.subscribe(() => {
        this.idleState = 'You\'ve gone idle!'
        console.log(this.idleState);
        $('.ui.modal')
          .modal('setting', 'closable', false)
          .modal('show')
        ;
    });
    
    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!'
      console.log(this.idleState);
    });

    // sets the ping interval to 15 seconds
    this.keepalive.interval(15);

    this.keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.idleService.getUserLoggedIn().subscribe(userLoggedIn => {
      if (userLoggedIn) {
        idle.watch()
        this.timedOut = false;
      } else {
        idle.stop();
      }
    })
  }

  reset() {
    this.idle.watch();
    this.timedOut = false;
  }

  hideChildModal(): void {
    $('.ui.modal')
      .modal('hide')
    ;
  }

  stay() {
    $('.ui.modal')
      .modal('hide')
    ;
    this.reset();
  }

  logout() {
    $('.ui.modal')
      .modal('hide')
    ;
    this.idleService.setUserLoggedIn(false);
    //clear token before going to login in otherwise login guard will redirect to '/' route
    //TODO: need to trigger toolbar compnent to remove display email
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
