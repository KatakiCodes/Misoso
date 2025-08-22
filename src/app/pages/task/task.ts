import { Component } from '@angular/core';
import { BaseLayout } from '../../components/base-layout/base-layout';
import { TaskItemCard } from "../../components/task-item-card/task-item-card";
import { TaskModel } from '../../Models/TaskModel';

@Component({
  selector: 'app-task',
  imports: [BaseLayout, TaskItemCard],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {
  task:TaskModel;
  constructor() {
    this.task = new TaskModel();
    this.task.Id = 1;
    this.task.Title = "My first task";
    this.task.Description = "This is my first task description";
    this.task.IsFocused = true;
    this.task.IsLate = false;
    this.task.IsConcluded = false;
    this.task.subtasks = [
      { Id: 1, TaskId:1,CreatedAt: new Date(), UpdatedAt: new Date() , Title: "Subtask 1", IsConcluded: true, IsFocused:false },
      { Id: 2, TaskId:1,CreatedAt: new Date(), UpdatedAt: new Date() , Title: "Subtask 2", IsConcluded: true , IsFocused:false},
      { Id: 3, TaskId:1,CreatedAt: new Date(), UpdatedAt: new Date() , Title: "Subtask 3", IsConcluded: false, IsFocused:true },
    ];
  }
}
