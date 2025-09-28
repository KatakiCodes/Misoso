import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let token:string = localStorage.getItem('token') ?? '';
  let router = inject(Router);
  if(token === ''){
    router.navigate(['/login']);
    return false;
  }
  return true;
};
