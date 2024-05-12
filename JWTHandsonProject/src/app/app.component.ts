import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IdelService } from './Services/idel.service';
import { AuthServiceService } from './Services/auth-service.service';
import { Idle, NgIdleModule ,DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,NgIdleKeepaliveModule,NgIdleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[IdelService,AuthServiceService]

})
export class AppComponent implements OnInit {
  title = 'JWTHandsonProject';
  /**
   *
   */
  constructor(private idle:Idle,private _route:Router) {
    
  }
  ngOnInit(): void {
    this.idle.setIdle(5); // 5 seconds of inactivity
    this.idle.setTimeout(5); // 5 seconds until timeout
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.onTimeout.subscribe(() => {
      // Perform logout actions here
      console.log('Timed out!');
      this._route.navigate(['/']);
    });
    this.idle.watch();
  }
  

}
