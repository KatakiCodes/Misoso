import { User } from '../../Models/User';
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
  protected user:User;
  private datestringValues:DateStringValues
  
  constructor(){
    this.date = new Date();
    this.user = new User("nelson@gmail.com","Nelson Dos Santos",1)
    this.datestringValues = new DateStringValues();
  }

  public getWeekDay():string{
    return this.datestringValues.weekdays[this.date.getDay()];
  }
  public getMonth():string{
    return this.datestringValues.months[this.date.getMonth()]
  }
}
