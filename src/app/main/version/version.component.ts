import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  loginModal = true;

  constructor() { }

  ngOnInit() {
  }

  loginModalShow() {
    this.loginModal = true;
  }

  loginModalHide() {
    this.loginModal = false;
  }

}
