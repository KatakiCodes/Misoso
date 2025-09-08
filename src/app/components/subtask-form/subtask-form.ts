import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-subtask-form',
  imports: [],
  templateUrl: './subtask-form.html',
  styleUrl: './subtask-form.scss'
})
export class SubtaskForm {
  @Output() toogleFormEvent;

  constructor(){
    this.toogleFormEvent = new EventEmitter<void>();
  }
  toogleForm(){
    return this.toogleFormEvent.emit();
  }
}
