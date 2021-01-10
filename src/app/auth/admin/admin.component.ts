import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements DoCheck {
  loginModal = false;
  placeholderUsername = 'victor';
  placeholderPassword = 'tank';

  constructor(private authService: AuthenticateService) {    
    this.loginModal = authService.authModalState;
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.loginModal = this.authService.authModalState;
  }

  badTouch() {
    // stop an error
  }

  loginModalHide() {
    this.authService.displayAuthModal(false);
  }

  tryLogin() {
    this.authService.checkAuthentication(this.placeholderUsername, this.placeholderPassword);
  }
}
