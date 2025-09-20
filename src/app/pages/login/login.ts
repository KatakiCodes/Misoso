import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { loginInterface } from '../../interfaces/loginInterface';

@Component({
  selector: 'app-login',
  imports: [CommonModule,RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  LoginForm:FormGroup;

  constructor(private AuthService:AuthService){

    this.LoginForm = new FormGroup({
      Email: new FormControl('',Validators.required),
      Password: new FormControl('',Validators.required)
    });
  }

  Login(){
    this.AuthService.auth((this.LoginForm.value as loginInterface)).subscribe(response=>{
      if(!response.success === true)
        this.LoginForm.setErrors({loginFailed:response.data})
      else{
        console.info(response.data);
        this.clearLoginForm();
      }
    })
  }

  private clearLoginForm():void{
    this.LoginForm.reset();
  }
}
