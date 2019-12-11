import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  redClass: boolean = false; // Strange attempt to use alternate class names in the bio?

  constructor() { }

  ngOnInit() {
  }

}
