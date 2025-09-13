export interface subtaskInterface
{
    id?:number;
    taskId:number
    title:string;
    createdAt:Date;
    updatedAt:Date;
    isFocused:boolean;
    isConcluded:boolean;
}