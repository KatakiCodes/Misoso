import { Component } from '@angular/core';
import { Button } from "../../components/button/button";
import { Subtask } from "../../components/subtask/subtask";
import { DashboardBaseLayout } from "../../components/dashboard-base-layout/dashboard-base-layout";

@Component({
  selector: 'app-task-details',
  imports: [Button, Subtask, DashboardBaseLayout],
  templateUrl: './task-details.html',
  styleUrl: './task-details.scss'
})
export class TaskDetails {

}
