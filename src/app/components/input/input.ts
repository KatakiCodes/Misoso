import { Component, Input as input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class Input {
  @input() type:string = '';
  @input() placeholder:string = '';
}
