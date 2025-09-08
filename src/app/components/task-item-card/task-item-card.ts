import { Component, Input } from '@angular/core';
import { TaskModel } from '../../Models/TaskModel';
import { CommonModule } from '@angular/common';
import { TaskForm } from "../task-form/task-form";

@Component({
  selector: 'app-task-item-card',
  imports: [CommonModule, TaskForm],
  templateUrl: './task-item-card.html',
  styleUrl: './task-item-card.scss'
})
export class TaskItemCard {
  @Input() task:TaskModel;
  @Input() showSubtaskActions: boolean = false;
}