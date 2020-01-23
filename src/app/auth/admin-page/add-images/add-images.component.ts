import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.scss']
})
export class AddImagesComponent implements OnInit {
  selectedImages: File[] = []; // Array of images ready to upload
  selectorClicked: boolean = false; // Whether the selector has been clicked
  select: string = "Select"; // Text on image selection button
  notAnImageMsg: string; // Error message for when user selects a file that is not an image
  size = [];
  uploadStarted: boolean = false; // File upload started
  uploadProgress: number; // File upload progress percentage
  uploadComplete: boolean = false; // File upload complete
  imageNameListLength: number;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.pullImageNameList();
  }

  pullImageNameList() {
    this.storageService
      .pullImageMetadata()
      .valueChanges()
      .subscribe(list => {
        this.imageNameListLength = list.length;
      });
  }

  onFileSelect(event: any) {
    this.selectedImages = [];
    this.select = "Reselect"; // Change button text to reflect change
    this.selectorClicked = true; // selector button has been clicked

    const imageFiles = event.target.files as File[]; // Pull file array from event object
    const imageRegex = /^image\//; // File type = image

    for (let image of imageFiles) {
      if (image.type.match(imageRegex)) {
        image[ "index" ] = this.imageNameListLength;
        console.log(image);
        console.log(this.imageNameListLength);

        this.selectedImages.push(image);
        const sizeFormatted = Math.round(image.size * 0.001);
        this.size.push(sizeFormatted);

        this.imageNameListLength++;
      } else {
        this.notAnImageMsg =
          "One or more files were omitted due to unsupported format. Image files only.";
      }
    }
  }

  sendImages() {
    this.uploadStarted = true;
    if (this.selectedImages.length > 0) {
      this.storageService.onUpload(this.selectedImages);
    } else {
      this.notAnImageMsg = "No images selected.";
    }

    this.storageService.uploadProgress.subscribe(res => {
      this.uploadProgress = res;
      if (res === 100) {
        this.uploadComplete = true;
      }
    });
  }
}
