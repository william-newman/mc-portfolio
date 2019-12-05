import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;

  constructor(private db: AngularFireStorage) {}

  onUpload(imageList: any) {
    for (let i = 0; i < imageList.length; i++) {
      const currentImage = imageList[i];
      this.ref = this.db.ref('pictures/' + currentImage.name);
      this.task = this.ref.put(currentImage);
      this.uploadProgress = this.task.percentageChanges();
    }
  }

  pullImages() {
    const store = this.db.ref('pictures/skull_drawn.jpg');
    return store;

  }
}
