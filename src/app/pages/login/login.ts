import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule,RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  LoginForm:FormGroup;
  LoginStatus:boolean | null;

  constructor(private AuthService:AuthService){

    this.LoginForm = new FormGroup({
      Email: new FormControl(),
      Password: new FormControl()
    });
    this.LoginStatus = null;

  }

  Login(){
  }
}
