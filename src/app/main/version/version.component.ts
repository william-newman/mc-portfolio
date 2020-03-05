import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  loginModal = false;
  currentAppVersion: string = 'Error, please reload.';

  constructor(private authService: AuthenticateService) {
    this.currentAppVersion = this.authService.appVersion;
    this.loginModal = this.authService.authModalState;
  }

  ngOnInit() {
  }

  // Shows login modal
  loginModalShow() {
    this.authService.displayAuthModal(true);
  }

  // Hides login modal
  loginModalHide() {
    this.authService.displayAuthModal(false);
  }

  getAuthState() {
    this.loginModal = this.authService.authModalState;
  }

  // Stop event propagation so that the input form cannot be clicked through
  badTouch(event: MouseEvent) {
    event.stopPropagation();
  }

  tryLogin() {
    // try login and redirect with authguard activated
  }

}
