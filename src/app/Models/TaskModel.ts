import { isFormControl } from "@angular/forms";

export class TaskModel{
    Id:number;
    UserId:number
    Title:string;
    CreatedAt:Date;
    UpdatedAt:Date;
    ToFinishAt:Date;
    FinishedAt:Date | undefined;
    IsFocused:boolean;
    IsLate:boolean;
    IsConcluded:boolean;

    constructor(userId:number, title:string, createdAt:Date, updatedAt:Date, toFinishAt:Date, finishedAt:Date,isFocused:boolean, isConcluded:boolean, id?:number){
        this.Id = id,
        this.UserId = userId;
        this.Title = title;
        this.CreatedAt = createdAt;
        this.UpdatedAt = updatedAt;
        this.ToFinishAt = toFinishAt;
        this.FinishedAt = finishedAt;
        this.IsFocused = isFocused;
        this.IsConcluded = isConcluded;
        this.IsLate = ((this.IsConcluded == false) && (this.ToFinishAt < new Date())); 
    }
}