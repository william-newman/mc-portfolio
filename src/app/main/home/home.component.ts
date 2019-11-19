import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slideIndex = 1;

  constructor() {}

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n: number) {
    let i: number;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }
}
