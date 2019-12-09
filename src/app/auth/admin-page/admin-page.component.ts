import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  selectedImages: File[] = [];
  selectorClicked = false;
  select = 'Select';
  notAnImageMsg: string;
  size = [];
  uploadStarted = false;
  uploadProgress: number;
  uploadComplete = false;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() { }

  onFileSelect(event: any) {
    this.selectedImages = [];
    this.select = 'Reselect';
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
