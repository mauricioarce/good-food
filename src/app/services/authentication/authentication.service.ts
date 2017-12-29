import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(private router: Router) { }

  logIn(): void {
    localStorage.setItem('token', 'mauri');
    this.router.navigate(['/home']);
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

}
