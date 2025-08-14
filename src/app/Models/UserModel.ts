export class UserModel
{
    Id:number
    Name:string
    Email:string

    constructor(name:string, email:string, id?:number){
        this.Id = id ?? null,
        this.Name = name,
        this.Email = email
    }
}