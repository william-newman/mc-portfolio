import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageSources: (string | IImage)[] = [
    {
      url: 'https://cdn-prod.mortalkombat.com/features/scorpion-bg.jpg',
      caption: 'Picture with caption',
      title: 'Picture title goes here'
    },
    {
      url: 'https://i.ytimg.com/vi/z_N2gPZKYIE/maxresdefault.jpg',
      clickAction: () => alert('picture clicked, function performed'),
      title: 'Cool sample picture #2'
    },
    {
      url:
        'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/01/mortal_kombat_11_via_official_youtube_trailer_2019.png',
      caption: 'Clickable link',
      href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'hehe'
    }
  ];
  autoPlayInterval: number = 5000;
  captionColor: string = 'whitesmoke';
  captionBackground: string = 'rgba(0, 0, 0, .35)';

  constructor() {}

  ngOnInit() {}
}
