import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user-service';
import { userInterface } from '../../interfaces/userInterface';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit {
  RegisterForm:FormGroup;

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
            this.UserService.createUser(this.RegisterForm.value as userInterface).subscribe();
            this.ClearRegisterForm();
          }
          else{
            this.RegisterForm.setErrors({passwordConfirmation:'the password confirmation does not match'});
            console.error(this.RegisterForm.getError('passwordConfirmation'))
          }
        }
      })
    }
  }

  private checkConfirmationPassword():boolean{
    return this.RegisterForm.get('password').value === this.RegisterForm.get('conf_password').value;
  }
  private ClearRegisterForm(){
    this.RegisterForm.reset();
  }
  
}
