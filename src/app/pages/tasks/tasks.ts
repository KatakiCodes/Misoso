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
  editMode:boolean = false;


  showForm(editMode:boolean){
    this.showTaskForm = true;
    this.editMode = editMode;
  }
  closeForm(){
    this.showTaskForm = false;
    this.editMode = false;
  }
}
