import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  loginModal = false;
  currentAppVersion = 'Error, please reload.';

  constructor(private authService: AuthenticateService) {
    this.currentAppVersion = this.authService.appVersion;
  }

  ngOnInit() {
  }

  loginModalShow() {
    this.loginModal = true;
  }

  loginModalHide() {
    this.loginModal = false;
  }

  badTouch(event: MouseEvent) {
    event.stopPropagation();
  }

  tryLogin() {
    // try login and redirect with authguard activated
  }

}
