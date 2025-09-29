import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user-service';
import { userInterface } from '../../interfaces/userInterface';
import { loginInterface } from '../../interfaces/loginInterface';
import { AuthService } from '../../services/auth-service';
import { authUserInterface } from '../../interfaces/authUserInterface';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit {
  RegisterForm:FormGroup;
  authService:AuthService = inject(AuthService);
  router = inject(Router);
  constructor(private UserService:UserService){}

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      conf_password: new FormControl('',Validators.required)
    })
  }

  CreateUser(){
    if(this.RegisterForm.valid === true){
      this.UserService.getUserByEmail(this.RegisterForm.get('email').value).subscribe(response=>{
        if(response != undefined)
          this.RegisterForm.setErrors({ emailDuplicated : 'This email is registered'})
        else{
          if(this.checkConfirmationPassword()){
            this.UserService.createUser(this.RegisterForm.value as userInterface).subscribe(()=>{
              this.login();
              this.ClearRegisterForm();
            });
          }
          else{
            this.RegisterForm.setErrors({passwordConfirmation:'the password confirmation does not match'});
          }
        }
      })
    }
  }
  private login(){

    let loginInterface:loginInterface = {
      email: this.RegisterForm.get('email').value,
      password: this.RegisterForm.get('password').value,
    }

    this.authService.auth(loginInterface).subscribe(response=>{
      if(response.success === true){
        let data = response.data as authUserInterface;
        localStorage.setItem('token', data.token ?? '');
        this.router.navigate(['/home']);
        this.ClearRegisterForm();
    }
  })
}
  private checkConfirmationPassword():boolean{
    return this.RegisterForm.get('password').value === this.RegisterForm.get('conf_password').value;
  }
  private ClearRegisterForm(){
    this.RegisterForm.reset();
  }
  
}
