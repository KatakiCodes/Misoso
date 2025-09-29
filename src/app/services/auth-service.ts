import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { loginInterface } from '../interfaces/loginInterface';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseResponseInterface } from '../interfaces/baseResponseInterface';
import { authUserInterface } from '../interfaces/authUserInterface';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
    localStorage.removeItem('token');
  }

  getPayload():{email:string,unique_name:string} | null{
    let token:string = localStorage.getItem('token') || '';
    if(token){
      let payloads = jwtDecode<{email:string,unique_name:string}>(token);
      return payloads;
    }
    else
      return null;
  }
}
