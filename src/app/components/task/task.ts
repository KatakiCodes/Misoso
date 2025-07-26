import { Component, Input } from '@angular/core';
import { Card } from "../card/card";
import { Subtask } from "../subtask/subtask";
import { TaskModel } from '../../Models/TaskModel';
@Component({
  selector: 'app-task',
  imports: [Card, Subtask],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {
  @Input() taskModel:TaskModel;
}
