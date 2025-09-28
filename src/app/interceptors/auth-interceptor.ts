import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let token:string = localStorage.getItem('token') ?? '';
  let authService:AuthService = inject(AuthService);

  req = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })
  return next(req).pipe(catchError((error:HttpErrorResponse)=>{
    if(error.status === 401 || error.status === 403)
      authService.logout();
    return throwError(()=>error);
  }));
};
