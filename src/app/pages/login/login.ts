import { Component } from '@angular/core';
import { BaseLogin } from "../../components/base-login/base-login";
import { Button } from "../../components/button/button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [BaseLogin, Button, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
