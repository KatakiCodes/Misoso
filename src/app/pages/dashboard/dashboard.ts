import { Component, Input } from '@angular/core';
import { DashboardBaseLayout } from '../../components/dashboard-base-layout/dashboard-base-layout';
import { Card } from "../../components/card/card";
import { Task } from "../../components/task/task";
import { TaskModel } from '../../Models/TaskModel';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardBaseLayout, Card, Task],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  @Input() focusedTask:TaskModel;

  constructor(private taskService:TaskService){
    this.focusedTask = taskService.getTaskFocused();
  }
  getTotalOfTask():number{
    return this.taskService.getTasks().length;
  }
  getToConcludeToday():number{
    return this.taskService.getTasks().filter((filter)=>{
      return filter.ToFinishAt.toDateString() === new Date().toDateString();
    }).length;
  }
  getToConcludeTomorrow():number{
    let tomorowDate:Date = new Date();
    tomorowDate.setHours(24);
    return this.taskService.getTasks().filter((filter)=>{
      return filter.ToFinishAt.toDateString() === new Date().toDateString();
    }).length;
  }
  getLateTasks():number{
    return this.taskService.getTasks().filter((filter)=>{
      return (filter.IsLate == true);
    }).length;
  }
}
