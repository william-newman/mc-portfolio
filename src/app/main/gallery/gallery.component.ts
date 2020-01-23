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
  imageMetadata: string[] = []; // Image metadata including names of images which is used to pull images from Firebase Storage
  imageRefs: string[] = []; // SRC of images pulled from Firebase Storage
  showModal: boolean = false; // Boolean to show or hide the full size image modal
  loadingImages: boolean = true; // Whether images are loading or not
  imagePullError: string = null; // Place for call errors
  modalImage: ImageObject; // Selected image to full screen

  constructor(private storageService: StorageService) {
    this.pullImageMetadata();
  }

  ngOnInit() {
    this.checkImageArr();
  }

  checkImageArr() {
    if (this.imageArr.length < 1) {
      this.imagePullError = 'Loading ...';
    } else {
      this.imageArr.sort(this.compare);
      this.imagePullError = null;
    }
  }

  compare( a: ImageObject, b: ImageObject ) {
    if ( a.index < b.index ){
      return -1;
    }
    if ( a.index > b.index ){
      return 1;
    }
    return 0;
  }

  pullImageMetadata() {
    this.storageService.pullImageMetadata()
    .valueChanges()
      .subscribe((pulledImageMetadata: string[]) => {
        pulledImageMetadata.forEach((imageData: any) => {          
          this.imageMetadata.push(imageData);
        });

        this.imageMetadata.forEach((imgData: any) => {
          this.pullImageRefs(imgData);
        });
      });
  }

  pullImageRefs(imageMetadata) {
    this.storageService.pullImageRefs(imageMetadata.name)
    .getDownloadURL()
    .subscribe(imgURL => {
      this.imageRefs.push(imgURL);

      this.imageArr.push({
        index: imageMetadata.index,
        src: imgURL,
        alt: imageMetadata.name,
        title: imageMetadata.name
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
