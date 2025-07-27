import { Component, OnInit } from '@angular/core';
import { DashboardBaseLayout } from "../../components/dashboard-base-layout/dashboard-base-layout";
import { Button } from "../../components/button/button";
import { TaskModel } from "../../Models/TaskModel";
import { TaskService } from '../../services/task.service';
import { Task as Task } from "../../components/task/task";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [DashboardBaseLayout, Button, Task, ReactiveFormsModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks implements OnInit {
  newTaskFieldExpand:boolean = false
  addTaskButtonText = "Nova tarefa";
  taskList:Array<TaskModel>;

  createTaskForm = new FormGroup({
    title: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
    userId: new FormControl(1, Validators.required),
    createdAt: new FormControl(new Date(),[Validators.required]),
    updatedAt: new FormControl(new Date(),[Validators.required]),
    toFinishAt: new FormControl('',[Validators.required]),
    isFocused: new FormControl(false),
  })

  constructor(private taskService:TaskService) {}

  ngOnInit(): void {
    this.taskList = this.getTasks();
  }
  private getTasks():Array<TaskModel>{
    return this.taskService.getTasks();
  }
  getTaskByIndex(index:number):TaskModel{
    return this.taskService.getTaskByIndex(index);
  }
  expandNewTaskField(){
    this.newTaskFieldExpand = (this.newTaskFieldExpand)? false : true;
    this.addTaskButtonText = (this.newTaskFieldExpand)? "Cancelar" : "Nova tarefa"
  }
}
