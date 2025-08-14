import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() text:string = '';
  @Input() classname:string = '';
  @Input() isDisabled:boolean;
}
