import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { authUserInterface } from '../../interfaces/authUserInterface';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  authService:AuthService = inject(AuthService);
  authUser$ = this.authService.currentUserSig();

  constructor(){
    console.info(this.authUser$);
  }
}
