import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private db: AngularFireStorage) {}

  onUpload(imageList: any) {
    for (let i = 0; i < imageList.length; i++) {
      const currentImage = imageList[i];
      this.ref = this.db.ref('pictures/' + currentImage.name);
      this.task = this.ref.put(currentImage);
    }
    return true;
  }
}
