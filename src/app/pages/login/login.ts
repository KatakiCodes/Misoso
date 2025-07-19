import { Component } from '@angular/core';
import { BaseLogin } from "../../components/base-login/base-login";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";

@Component({
  selector: 'app-login',
  imports: [BaseLogin, Button, Input],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
