import { Component } from '@angular/core';
import { DashboardBaseLayout } from "../../components/dashboard-base-layout/dashboard-base-layout";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Task } from "../../components/task/task";

@Component({
  selector: 'app-tasks',
  imports: [DashboardBaseLayout, Button, Input, Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {

}
