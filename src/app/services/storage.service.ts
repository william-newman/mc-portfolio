import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private db: AngularFireDatabase) {}

  onUpload(imageList: any) {
    for (let i = 0; i < imageList.length; i++) {
      console.log(imageList[i]);

      const storageRef = firebase.storage().ref();
      const imagesRef = storageRef.child('m_images');
      const fileRef = imagesRef.child(imageList[i].name);
      fileRef.put(imageList[i]).then(snapshot => {
        console.log('Works? ' + i);
      });
    }
  }
}
