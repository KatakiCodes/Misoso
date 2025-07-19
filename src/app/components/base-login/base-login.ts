import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-login',
  imports: [],
  templateUrl: './base-login.html',
  styleUrl: './base-login.scss'
})
export class BaseLogin {
  @Input() title:string = '';
}
