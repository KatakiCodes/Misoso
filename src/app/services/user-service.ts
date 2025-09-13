import { Injectable } from '@angular/core';
import { userInterface } from '../interfaces/userInterface';
import { baseResponseInterface } from '../interfaces/baseResponseInterface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<userInterface>;
  private baseUrl:string;
  constructor(private httpClient:HttpClient) {
    this.users = new Array<userInterface>();
    this.baseUrl = environment.apiUrl+'users';
  }

  createUser(user: userInterface):Observable<baseResponseInterface<userInterface>> {
    return this.httpClient.post<baseResponseInterface<userInterface>>(this.baseUrl,user);
  }

   getUsers() : Observable<baseResponseInterface<userInterface[]>>{
    return this.httpClient.get<baseResponseInterface<userInterface[]>>(this.baseUrl);
  }
  getUserByEmail(email:string):Observable<userInterface | undefined>{
    return this.getUsers().pipe(map(response=>{
      let users = response.data.filter(item=>{
        return item.email === email;
      });
      return (users && users.length > 0) ? users[0] : undefined;
    }));
  }
}
