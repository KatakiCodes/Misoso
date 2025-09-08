import { Component, Input } from '@angular/core';
import { TaskModel } from '../../Models/TaskModel';
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
  @Input() task:TaskModel;
  @Input() showSubtaskActions: boolean;
  subtaskForm: boolean;

  constructor(){
    this.showSubtaskActions = false;
    this.subtaskForm = false;
  }

  toggleSubtaskForm(){
    this.subtaskForm = (this.subtaskForm) ? false : true;
  }
}