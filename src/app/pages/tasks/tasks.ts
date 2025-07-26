import { Component, OnInit } from '@angular/core';
import { DashboardBaseLayout } from "../../components/dashboard-base-layout/dashboard-base-layout";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { TaskModel } from "../../Models/TaskModel";
import { TaskService } from '../../services/task.service';
import { Task as Task } from "../../components/task/task";

@Component({
  selector: 'app-tasks',
  imports: [DashboardBaseLayout, Button, Input, Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks implements OnInit {
  newTaskFieldExpand:boolean = false
  addTaskButtonText = "Nova tarefa";
  taskList:Array<TaskModel>;
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
