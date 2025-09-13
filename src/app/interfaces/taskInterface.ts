import { subtaskInterface } from "./subtaskInterface";

export interface taskInteface
{
    id?:number;
    userId:number
    title:string;
    description:string;
    createdAt:Date;
    updatedAt:Date;
    toFinishAt:Date | undefined;
    finishedAt:Date;
    isFocused:boolean;
    isLate:boolean;
    isConcluded:boolean;
    subtasks:Array<subtaskInterface>;
}