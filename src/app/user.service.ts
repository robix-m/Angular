import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  public isLogIn: boolean = false;
  public userName: string = 'Andrzej';

  constructor() { }

  logIn(): void {
    this.isLogIn = true;
  }

  logOut(): void {
    this.isLogIn = false;
  }

}
