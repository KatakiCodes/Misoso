import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let token:string = localStorage.getItem('token') ?? '';
  let router = inject(Router);
    
    if(token === '' || authService.isTokenExpired())
      return true;
    router.navigate(['/home']);
    return false;
};
