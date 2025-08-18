import { Component } from '@angular/core';
import { Header } from "../header/header";

@Component({
  selector: 'app-base-layout',
  imports: [Header],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.scss'
})
export class BaseLayout {

}
