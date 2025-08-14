import { Component, Input } from '@angular/core';
import { Card } from "../card/card";
import { Subtask } from "../subtask/subtask";
import { TaskModel } from '../../Models/TaskModel';
import { CommonModule } from '@angular/common';
import { SubtaskModel } from '../../Models/SubtaskModel';
@Component({
  selector: 'app-task',
  imports: [Card, Subtask, CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {
  @Input() taskModel:TaskModel;
  showFocusedSubtask:boolean = false;

  constructor(){
    if(this.getFocusedSubtask())
      this.showFocusedSubtask = true;
  }
  private getSubtasks() : Array<SubtaskModel>{
    return [];
  }
  private getFocusedSubtask() : SubtaskModel{
    let filterResult = this.getSubtasks().find((filter)=>{
      return filter.IsFocused;
    });
    return filterResult;
  }
}
