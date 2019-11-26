import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  loginModal = false;

  constructor() { }

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
