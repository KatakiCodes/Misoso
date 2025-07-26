import { UserModel } from '../../Models/UserModel';
import { DateStringValues } from '../../shared/DateStringValues';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-base-layout',
  imports: [],
  templateUrl: './dashboard-base-layout.html',
  styleUrl: './dashboard-base-layout.scss'
})
export class DashboardBaseLayout {
  protected weekday:string;
  protected date:Date;
  @Input() sectionPage:string;
  protected userModel:UserModel;
  private datestringValues:DateStringValues
  
  constructor(){
    this.date = new Date();
    this.userModel = new UserModel("nelson@gmail.com","Nelson Dos Santos",1)
    this.datestringValues = new DateStringValues();
  }

  public getWeekDay():string{
    return this.datestringValues.weekdays[this.date.getDay()];
  }
  public getMonth():string{
    return this.datestringValues.months[this.date.getMonth()]
  }
}
