import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  versionNumber: string;

  constructor(private auth: AuthenticateService) {
    this.versionNumber = this.auth.appVersion;
   }

  ngOnInit() {
  }

}
