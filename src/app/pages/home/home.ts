import { Component, Inject, Input, OnInit } from '@angular/core';
import { BaseLayout } from "../../components/base-layout/base-layout";
import { DashboardCard } from "../../components/dashboard-card/dashboard-card";
import { TaskModel } from '../../Models/TaskModel';
import { TaskItemCard } from "../../components/task-item-card/task-item-card";
import { Title } from '@angular/platform-browser';
import { SubtaskModel } from '../../Models/SubtaskModel';

@Component({
  selector: 'app-home',
  imports: [BaseLayout,DashboardCard,TaskItemCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home{
  @Input() taskFocused:TaskModel;
  constructor(){
    this.taskFocused = {
    Id: 1,
    UserId: 1,
    Title: 'Complet the dashboard',
    Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae iusto sapiente odit, iste ex dolores. Saepe iste dolores tempora deleniti nam. Asperiores et corrupti ullam minima natus in, placeat soluta?',
    CreatedAt: new Date(),
    UpdatedAt:new Date(),
    ToFinishAt:new Date(),
    FinishedAt:new Date(),
    IsFocused:true,
    IsLate:false,
    IsConcluded:false,
    subtasks:[] = [
      {
        Id:1,
        TaskId:1,
        Title:'Create task section for show more details',
        CreatedAt:new Date(),
        UpdatedAt:new Date(),
        IsFocused:true,
        IsConcluded:false
      },
      {
        Id:2,
        TaskId:1,
        Title:'Build the subtask section',
        CreatedAt:new Date(),
        UpdatedAt:new Date(),
        IsFocused:false,
        IsConcluded:false
      },
      {
        Id:3,
        TaskId:1,
        Title:'Finishing the screen',
        CreatedAt:new Date(),
        UpdatedAt:new Date(),
        IsFocused:false,
        IsConcluded:false
      }
    ] 
    }
  }
}
