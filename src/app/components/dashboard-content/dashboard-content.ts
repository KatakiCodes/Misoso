import { Component } from '@angular/core';
import { Card } from "../card/card";
import { Task } from "../task/task";

@Component({
  selector: 'app-dashboard-content',
  imports: [Card, Task],
  templateUrl: './dashboard-content.html',
  styleUrl: './dashboard-content.scss'
})
export class DashboardContent {

}
