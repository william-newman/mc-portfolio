import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  loginModal: boolean = false;
  currentAppVersion: string = 'Error, please reload.';

  constructor(private authService: AuthenticateService) {
    this.currentAppVersion = this.authService.appVersion;
  }

  ngOnInit() {
  }

  // Shows login modal
  loginModalShow() {
    this.loginModal = true;
  }

  // Hides login modal
  loginModalHide() {
    this.loginModal = false;
  }

  // Stop event propagation so that the input form cannot be clicked through
  badTouch(event: MouseEvent) {
    event.stopPropagation();
  }

  tryLogin() {
    // try login and redirect with authguard activated
  }

}
