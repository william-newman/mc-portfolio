import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  versionNumber: string;
  hamActive: boolean = false; // Hamburger icon bool

  constructor(private auth: AuthenticateService) {
    this.versionNumber = this.auth.appVersion;
   }

  ngOnInit() {
  }

  toggleHamburgerActive() {
    this.hamActive = !this.hamActive;
  }

}
