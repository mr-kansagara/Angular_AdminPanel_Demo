import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  constructor() { }
  
  login(): void {
    // Implement login logic here
  }
  
  logout(): void {
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

  //http client demonstration
  getData() {
    return this.http.get('/api/data').pipe(
      map(response => {
        return response;
      })
    );
  }
  getAuthToken(): string {
    return 'dummy-auth-token';
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }
}
