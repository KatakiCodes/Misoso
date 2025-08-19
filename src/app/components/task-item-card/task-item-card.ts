import { Component, Input } from '@angular/core';
import { TaskModel } from '../../Models/TaskModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item-card',
  imports: [CommonModule],
  templateUrl: './task-item-card.html',
  styleUrl: './task-item-card.scss'
})
export class TaskItemCard {
  @Input() task:TaskModel;
}