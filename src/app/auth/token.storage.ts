import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const USER = 'user';

@Injectable()
export class TokenStorage {

  constructor() { }

  signOut() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER);
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    if (!token) return;
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    if (!user) return;
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,  user);
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem(USER));
  }
}