import { Injectable } from '@angular/core';
import { UserService } from './user-service';
import { userInterface } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService:UserService){}
}
