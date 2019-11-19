import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageSources: (string | IImage)[] = [
    // '../../../resources/skull_drawn.jpg',
    // '../../../resources/skull_vector.jpg',
    // '../../../resources/small_skull_drawn.jpg'
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZ6XNJwdKW520Q7vK9Ko03PMt3Ji3_wXEVe9gYHMTUg_29zjqgQ&s',
      caption: 'first'
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbL7Ouz4-SvFPVU96MaI0tjGH04CnNRJb6rSejGcZjD-cpqpi&s',
      clickAction: () => alert('custom click function')
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXRDiVts2fG8JaheGtGntudwk2HLqIaWouW9mKnaz0tRNmrmXVQ&s',
      caption: 'Fapple TV',
      href: 'https://www.apple.com/'
    }
  ];
  autoPlayInterval = 5000;

  constructor() {}

  ngOnInit() {
  }
}
