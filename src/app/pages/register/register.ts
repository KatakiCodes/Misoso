import { Component } from '@angular/core';
import { BaseLogin } from "../../components/base-login/base-login";
import { Button } from "../../components/button/button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [BaseLogin, Button, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

}
