import { Component, OnInit } from "@angular/core";
import { StorageService } from "src/app/services/storage.service";
import { ImageObject } from 'src/app/models/image-object';

@Component({
  selector: "app-move-images",
  templateUrl: "./move-images.component.html",
  styleUrls: ["./move-images.component.scss"]
})
export class MoveImagesComponent implements OnInit {
  imageMetadata: ImageObject[] = []; // Image metadata
  errMessage: string = ""; // Error message
  collapsed: boolean = true; // Whether to show this module or not

  constructor(private storageService: StorageService) {
    this.pullImageMetadata();
  }

  ngOnInit() {}

  ngDoCheck() {
    this.imageMetadata.sort(this.compare);
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

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  pullImageMetadata() {
    this.imageMetadata = []; // Clear the array before load and after functions

    this.storageService
      .pullImageMetadata()
      .valueChanges()
      .subscribe((pulledImageMetadata: any[]) => {
        pulledImageMetadata.forEach((imageData: any) => {
          this.imageMetadata.push(imageData);
        });
      });
  }

  moveUp(imageIndex: number) {
    if (imageIndex > 0) {
      this.imageMetadata[imageIndex].index--;
      this.imageMetadata[imageIndex - 1].index++;
    } else {
      this.errMessage = "List item exceeds list range";
      this.errorResetTimer();
    }
  }

  moveDown(imageIndex: number) {
    if (imageIndex < this.imageMetadata.length - 1) {
      this.imageMetadata[imageIndex].index++;
      this.imageMetadata[imageIndex + 1].index--;
    } else {
      this.errMessage = "List item exceeds list range";
      this.errorResetTimer();
    }
  }

  errorResetTimer() {
    setTimeout(() => {
      this.errMessage = "";
    }, 5000);
  }

  saveConfig() {
    if (this.imageMetadata.length > 0) {
      this.storageService.changeImageIndexes(this.imageMetadata);
      this.resetConfig();
    }
  }

  resetConfig() {
    location.reload();
  }
}
