import { CommonModule } from '@angular/common';
import { Component, Input as input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class Input {
  @input() classname:string;
  @input() type:string = '';
  @input() placeholder:string = '';
}
