import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imageArr = [];
  showModal = false;
  image1 = 'https://www.skullshoppe.com/images/skulls/rl%20ud1.jpg';
  image2 = 'https://cdn.mos.cms.futurecdn.net/u8wSHMmMMXzZuAFBCmcsCK.jpg';
  image3 =
    'https://cdn.shopify.com/s/files/1/0038/3867/3008/products/Skull_Head_Statue_016_600x.jpg?v=1541304069';
  image4 =
    'https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/ScorpionMKXRender.png/220px-ScorpionMKXRender.png';
  image5 = 'https://i.ytimg.com/vi/Sg0rXa1WnZc/maxresdefault.jpg';
  modalImage: {
    src: '',
    alt: 'No image found, error',
    title: 'Default'
  };

  constructor() {
    this.pushImages();
    this.pushImages();
    this.pushImages();
    this.pushImages();
    this.pushImages();
    this.pushImages();
  }

  ngOnInit() {}

  pushImages() {
    this.imageArr.push({
      src: this.image1,
      alt: 'Skull boi',
      title: 'I dunno'
    });
    this.imageArr.push({
      src: this.image2,
      alt: 'Skull boi',
      title: 'I dunno'
    });
    this.imageArr.push({
      src: this.image3,
      alt: 'Skull boi',
      title: 'I dunno'
    });
    this.imageArr.push({
      src: this.image4,
      alt: 'Skull boi',
      title: 'GET OVER HERE'
    });
    this.imageArr.push({
      src: this.image5,
      alt: 'Vader',
      title: 'Darth Vader'
    });
  }

  fullSizeImage(imgIndex: number) {
    this.showModal = true;
    this.modalImage = this.imageArr[imgIndex];
  }

  hideModal() {
    this.showModal = false;
  }
}
