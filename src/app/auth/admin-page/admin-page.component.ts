import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  selectedImages: File[] = [];
  imageNames: string[] = [];
  selectorClicked = false;
  select = 'Select';
  notAnImageMsg: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onFileSelect(event) {
    this.imageNames = [];
    this.select = 'Reselect';
    this.selectorClicked = true;

    const imageFiles = event.target.files as File[];
    const imageRegex = /^image\//;

    for (const image of imageFiles) {
      if (image.type.match(imageRegex)) {
        // this.imageNames.push(image.name);
        this.selectedImages.push(image);
      } else {
        this.notAnImageMsg = 'One or more files were omitted due to unsupported format. Image files only.';
      }
    }
    console.log(imageFiles);
  }

  sendImages() {
    console.log(this.selectedImages);

    //   const formData = new FormData();
    //   formData.append('image', this.selectedImages, this.selectedImages.name);
    //   this.http.post('url', formData, {
    //     reportProgress: true,
    //     observe: 'events'
    //   })
    //   .subscribe(event => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
    //     } else if (event.type === HttpEventType.Response) {
    //       console.log(event);
    //     }
    //   });
  }
}
