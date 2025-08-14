import { SubtaskModel } from "./SubtaskModel";

export class TaskModel
{
    Id:number;
    UserId:number
    Title:string;
    Description:string;
    CreatedAt:Date;
    UpdatedAt:Date;
    ToFinishAt:Date | undefined;
    FinishedAt:Date;
    IsFocused:boolean;
    IsLate:boolean;
    IsConcluded:boolean;
    subtasks:Array<SubtaskModel> = [] 
}