import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  selectedImages: File[] = []; // Array of images ready to upload
  selectorClicked: boolean = false; // Whether the selector has been clicked
  select: string = 'Select'; // Text on image selection button
  notAnImageMsg: string; // Error message for when user selects a file that is not an image
  size = [];
  uploadStarted: boolean = false; // File upload started
  uploadProgress: number; // File upload progress percentage
  uploadComplete: boolean = false; // File upload complete

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() { }

  onFileSelect(event: any) {
    this.selectedImages = [];
    this.select = 'Reselect'; // Change button text to reflect change
    this.selectorClicked = true;

    const imageFiles = event.target.files as File[];
    const imageRegex = /^image\//;

    for (const image of imageFiles) {
      if (image.type.match(imageRegex)) {
        this.selectedImages.push(image);
        const sizeFormatted = Math.round(image.size * 0.001);
        this.size.push(sizeFormatted);
      } else {
        this.notAnImageMsg =
          'One or more files were omitted due to unsupported format. Image files only.';
      }
    }
  }

  sendImages() {
    this.uploadStarted = true;
    if (this.selectedImages.length > 0) {
      this.storageService.onUpload(this.selectedImages);
    } else {
      this.notAnImageMsg = 'No images selected.';
    }
    
    this.storageService.uploadProgress
    .subscribe((res)=> {
      this.uploadProgress = res;
      if (res === 100) {
        this.uploadComplete = true;
      }
    });
  }
}
