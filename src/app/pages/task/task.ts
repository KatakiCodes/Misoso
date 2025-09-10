import { Component } from '@angular/core';
import { BaseLayout } from '../../components/base-layout/base-layout';
import { TaskItemCard } from "../../components/task-item-card/task-item-card";
import { taskInteface } from '../../interfaces/taskInterface';
import { TaskForm } from "../../components/task-form/task-form";
import { SubtaskForm } from "../../components/subtask-form/subtask-form";

@Component({
  selector: 'app-task',
  imports: [BaseLayout, TaskItemCard, TaskForm, SubtaskForm],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {

  task:taskInteface;
  
  constructor() {
  }
}
