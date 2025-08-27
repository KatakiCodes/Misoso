import { Component } from '@angular/core';
import { BaseLayout } from "../../components/base-layout/base-layout";
import { TaskForm } from "../../components/task-form/task-form";

@Component({
  selector: 'app-tasks',
  imports: [BaseLayout, TaskForm],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {
  showTaskForm:boolean = false;
  createTaskButtonText:string = '+ New task';


  toggleCreateTaskButtonText(){
    this.showTaskForm = (this.showTaskForm) ? false:true;
    this.createTaskButtonText = (!this.showTaskForm) ?'+ New task':'Cancel';
    console.log(this.createTaskButtonText);
  }
}
