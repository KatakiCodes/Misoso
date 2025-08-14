import { Injectable } from '@angular/core';
import { UserModel } from '../Models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userModels:Array<UserModel> = [];

  create(userModel:UserModel){
    this.userModels.push(userModel);
  }
  getUsers(index:number):UserModel{
    return this.userModels[index];
  }
}
