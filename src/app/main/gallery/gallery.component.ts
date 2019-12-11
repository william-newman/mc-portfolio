import { Component, OnInit } from "@angular/core";
import { StorageService } from "src/app/services/storage.service";
import { ImageObject } from 'src/app/models/image-object';

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  imageArr: ImageObject[] = []; // Image objects
  imageNames: string[] = []; // Names of images - used to pull images from Firebase Storage
  imageRefs: string[] = []; // SRC of images pulled from Firebase Storage
  showModal = false; // Boolean to show or hide the full size image modal
  loadingImages = true;
  imagePullError = null;
  modalImage: ImageObject;

  constructor(private storageService: StorageService) {
    this.pullImageNames();
  }

  ngOnInit() {
    this.checkImageArr();
  }

  checkImageArr() {
    if (this.imageArr.length < 1) {
      this.imagePullError = 'Loading ...';
    } else {
      this.imagePullError = null;
    }
  }

  pullImageNames() {
    this.storageService.pullImageNames()
    .valueChanges()
      .subscribe((pulledImageNames: string[]) => {
        pulledImageNames.forEach((imageName: string) => {
          this.imageNames.push(imageName);
        });

        this.imageNames.forEach((imgName: string) => {
          this.pullImageRefs(imgName);
        });
      });
  }

  pullImageRefs(imageName) {
    this.storageService.pullImageRefs(imageName)
    .getDownloadURL()
    .subscribe(imgURL => {
      this.imageRefs.push(imgURL);

      this.imageArr.push({
        src: imgURL,
        alt: imageName,
        title: imageName
      });
      this.checkImageArr();
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
