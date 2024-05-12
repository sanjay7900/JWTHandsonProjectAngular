import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive ,NgIdleKeepaliveModule,} from '@ng-idle/keepalive';
import { NgIdleModule } from '@ng-idle/core';

@Injectable({
  providedIn: 'root'
})
export class IdelService {

  constructor(private idle: Idle, private keepalive: Keepalive,private _router:Router) {
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => console.log('No longer idle.'));
    idle.onTimeout.subscribe(() => {
      console.log('Timed out!');
      
      // Perform logout actions here
    });
    idle.onIdleStart.subscribe(() => console.log('You\'ve gone idle!'));
    idle.onTimeoutWarning.subscribe((countdown) => console.log('You will time out in ' + countdown + ' seconds!'));

    // Start watching for user inactivity
    idle.watch();
    this.resetTimer();
  }

  resetTimer() {
    this.idle.watch();
  }
}
