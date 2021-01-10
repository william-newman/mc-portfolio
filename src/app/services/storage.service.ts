import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ImageObject } from '../models/image-object';

@Injectable({
  providedIn: "root"
})
export class StorageService {
  // ref: AngularFireStorageReference;
  // task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  imageNames = [];
  imageRefs = [];
  rtdbPath = 'imageMetadata';

  constructor(
    // private db: AngularFireStorage,
    // private rtdb: AngularFireDatabase
  ) {}

  onUpload(imageList: any) {
    for (let i = 0; i < imageList.length; i++) {
      const currentImage = imageList[i];

      const imageMetadata = {
        index: currentImage.index,
        name: currentImage.name,
        type: currentImage.type
      }
      
      // this.ref = this.db.ref("pictures/" + imageMetadata.name);
      // this.rtdb.database.ref(this.rtdbPath).push(imageMetadata);
      // this.task = this.ref.put(currentImage);
      // this.uploadProgress = this.task.percentageChanges();
    }
  }

  pullImageMetadata() {
    const path = "/" + this.rtdbPath;
    // return this.rtdb.list(path);
  }

  pullImageRefs(imgName) {
    // return this.db.ref("pictures/" + imgName);
  }

  changeImageIndexes(imageMetadata: ImageObject[]) {
    // this.rtdb.database.ref(this.rtdbPath).set(imageMetadata);
  }
}
