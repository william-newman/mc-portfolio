import { Injectable } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "angularfire2/storage";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  imageNames = [];
  imageRefs = [];

  constructor(
    private db: AngularFireStorage,
    private rtdb: AngularFireDatabase
  ) {}

  onUpload(imageList: any) {
    for (let i = 0; i < imageList.length; i++) {
      const currentImage = imageList[i];
      this.ref = this.db.ref("pictures/" + currentImage.name);
      this.rtdb.database.ref("imageNames").push(currentImage.name);
      this.task = this.ref.put(currentImage);
      this.uploadProgress = this.task.percentageChanges();
    }
  }

  pullImageNames() {
    const path = "/imageNames";
    return this.rtdb.list(path);
  }

  pullImageRefs(imgName) {
    return this.db.ref("pictures/" + imgName);
  }
}
