import { subtaskInterface } from "./subtaskInterface";

export interface taskInteface
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
    subtasks:Array<subtaskInterface>;
}