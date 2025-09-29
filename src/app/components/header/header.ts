import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { authUserInterface } from '../../interfaces/authUserInterface';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  authService:AuthService = inject(AuthService);
  authUser:{email:string,unique_name:string} | null = null;

  constructor(){
  }
  ngOnInit(): void {
    this.authUser = this.authService.getPayload();
  }

}
