import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { loginInterface } from '../interfaces/loginInterface';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseResponseInterface } from '../interfaces/baseResponseInterface';
import { authUserInterface } from '../interfaces/authUserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

currentUserSig = signal<authUserInterface | undefined | null>(undefined);

  baseUrl:string;
  constructor(private http:HttpClient){
    this.baseUrl = environment.apiUrl+'auth';
  }

  auth(login:loginInterface):Observable<baseResponseInterface<authUserInterface | string>>{
    return this.http.post<baseResponseInterface<authUserInterface | string>>(this.baseUrl,login).pipe(map(response=>{
      return {
        data : response.data,
        success: true
      }
    }),
  catchError((requestFailed)=>of(
    {
      success : false,
      data : (requestFailed.status === 401)? 'Email or Password invalid!' : 'An unexpected error occured!'
    }
    )))
  ;
  }

  logout(){
    this.currentUserSig.set(null);
    localStorage.removeItem('token');
  }
}
