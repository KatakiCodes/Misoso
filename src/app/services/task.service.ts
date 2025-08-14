import { Injectable } from '@angular/core';
import { TaskModel } from '../Models/TaskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskModels:Array<TaskModel> = [];

  create(taskModel:TaskModel){
    this.taskModels.push(taskModel);
  }

  getTaskByIndex(index:number) : TaskModel{
    return this.taskModels[index];
  }

  getTasks() : Array<TaskModel>{
    return this.taskModels;
  }

  getTaskFocused(): TaskModel{
    return this.taskModels.find((taskFilter)=>{
      return taskFilter.IsFocused == true;
    })
  }
}
