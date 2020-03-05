import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  appVersion = '1.2.4';
  authModalState = false;
  username = 'victor'
  password = 'tank';

  constructor() { }

  displayAuthModal(bool: boolean) {
    this.authModalState = bool;
  }

  checkAuthentication(usn, pwd): boolean {
    let checks = 0;
    if (usn.match(this.username)) {
      checks++;
    }
    if (pwd.match(this.password)) {
      checks++;
    }

    if (checks > 1) {
      console.log('succ');
      return true;
    } else {
      console.log('fucc');
      return false;
    }
  }
}
