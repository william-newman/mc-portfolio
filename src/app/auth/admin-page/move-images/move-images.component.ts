import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-images',
  templateUrl: './move-images.component.html',
  styleUrls: ['./move-images.component.scss']
})
export class MoveImagesComponent implements OnInit {
  collapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

}
