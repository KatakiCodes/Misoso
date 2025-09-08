import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss'
})
export class TaskForm {

  @Input() editMode: boolean;
  @Output() closeFormEvent;

  constructor(){
    this.editMode = false;
    this.closeFormEvent = new EventEmitter<void>();
  }

  closeForm():void{
    return this.closeFormEvent.emit();
  }
}
