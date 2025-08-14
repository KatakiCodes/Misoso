import { Component, OnInit } from '@angular/core';
import { DashboardBaseLayout } from "../../components/dashboard-base-layout/dashboard-base-layout";
import { Button } from "../../components/button/button";
import { TaskModel } from "../../Models/TaskModel";
import { TaskService } from '../../services/task.service';
import { Task as Task } from "../../components/task/task";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [DashboardBaseLayout, Button, Task, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks implements OnInit {
  newTaskFieldExpand:boolean = false
  addTaskButtonText = "Nova tarefa";
  taskList:Array<TaskModel>;

  createTaskForm = new FormGroup({
    title: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    description: new FormControl(''),
    toFinishAt: new FormControl(),
    isFocused: new FormControl(false),
  })

  constructor(private taskService:TaskService) {}

  ngOnInit(): void {
    this.taskList = this.getTasks();
  }
  getTasks():Array<TaskModel>{
    console.log(this.taskList);
    return this.taskService.getTasks();
  }
  getTaskByIndex(index:number):TaskModel{
    return this.taskService.getTaskByIndex(index);
  }
  expandNewTaskField(){
    this.newTaskFieldExpand = (this.newTaskFieldExpand)? false : true;
    this.addTaskButtonText = (this.newTaskFieldExpand)? "Cancelar" : "Nova tarefa"
  }
  
  createTask(){
    let taskModel:TaskModel = new TaskModel();
      taskModel.Id = undefined;
      taskModel.UserId = undefined;
      taskModel.Title = this.createTaskForm.value.title;
      taskModel.Description = this.createTaskForm.value.description;
      taskModel.CreatedAt = new Date();
      taskModel.UpdatedAt = new Date();
      taskModel.ToFinishAt = this.createTaskForm.value.toFinishAt ?? undefined;
      taskModel.IsFocused = this.createTaskForm.value.isFocused ?? false;
      taskModel.IsConcluded = false;
    this.taskService.create(taskModel);
    this.createTaskForm.reset();
  }
}
