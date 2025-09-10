import { Component, Inject, Input, OnInit } from '@angular/core';
import { BaseLayout } from "../../components/base-layout/base-layout";
import { DashboardCard } from "../../components/dashboard-card/dashboard-card";
import { taskInteface } from '../../interfaces/taskInterface';
import { TaskItemCard } from "../../components/task-item-card/task-item-card";
import { Title } from '@angular/platform-browser';
import { subtaskInterface } from '../../interfaces/subtaskInterface';

@Component({
  selector: 'app-home',
  imports: [BaseLayout,DashboardCard,TaskItemCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home{
  
  @Input() taskFocused:taskInteface;

  constructor(){
    this.taskFocused;
  }
}
