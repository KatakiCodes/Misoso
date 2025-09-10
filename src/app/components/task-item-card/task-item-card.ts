import { Component, Input } from '@angular/core';
import { taskInteface } from '../../interfaces/taskInterface';
import { CommonModule } from '@angular/common';
import { TaskForm } from "../task-form/task-form";
import { SubtaskForm } from "../subtask-form/subtask-form";

@Component({
  selector: 'app-task-item-card',
  imports: [CommonModule, TaskForm, SubtaskForm],
  templateUrl: './task-item-card.html',
  styleUrl: './task-item-card.scss'
})
export class TaskItemCard {

  @Input() showSubtaskActions:boolean;
  @Input() task:taskInteface;
  subtaskForm:boolean;

  constructor(){
    this.showSubtaskActions = false;
    this.subtaskForm = false;
    console.info(this.task);
  }

  toggleSubtaskForm(){
    this.subtaskForm = (this.subtaskForm) ? false : true;
  }
}