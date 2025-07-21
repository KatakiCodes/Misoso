import { Component } from '@angular/core';
import { DashboardBaseLayout } from '../../components/dashboard-base-layout/dashboard-base-layout';
import { Card } from "../../components/card/card";
import { Task } from "../../components/task/task";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardBaseLayout, Card, Task],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
