import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../features/auth/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isAuthenticated();
  
  // Check the user's role
  if (authService.isAuthenticated()) {
    // return authService.hasRole('admin');
  }
  return false;

};
