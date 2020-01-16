import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { TokenStorage } from '../auth/token.storage';

@Injectable()
export class OnlyAdminUsersGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorage) {}

  canActivate() {
    const user = this.tokenStorage.getUser();
    
    console.log(user)
    return user && user.isAdmin;
  }
}
