import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login() : void {
    // Implement login logic here
  }

  logout() : void{
    // Implement logout logic here
  }

  isLoggedIn(): boolean {
    // Implement logic to check if user is logged in
    return false;
  }

  getUserRole(): string {
    // Implement logic to get the user's role
    return 'user';
  }

  register(): void {
    // Implement registration logic here
  }

}
