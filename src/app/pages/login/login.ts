import { Component, inject, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { loginInterface } from '../../interfaces/loginInterface';
import { authUserInterface } from '../../interfaces/authUserInterface';

@Component({
  selector: 'app-login',
  imports: [CommonModule,RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  LoginForm:FormGroup;
  router = inject(Router);
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
        let data = response.data as authUserInterface;
        localStorage.setItem('token', data.token ?? '');
        this.clearLoginForm();
        this.goToHome();
      }
    })
  }

  private clearLoginForm():void{
    this.LoginForm.reset();
  }

  private goToHome(){
    this.router.navigate(['/home']);
  }  
}
