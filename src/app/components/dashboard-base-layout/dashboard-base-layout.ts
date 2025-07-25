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
    this.user = {id:1, email:"nelson@gmail.com", name:"Nelson Dos Santos"}
    this.datestringValues = new DateStringValues();
  }

  public getWeekDay():string{
    return this.datestringValues.weekdays[this.date.getDay()];
  }
  public getMonth():string{
    return this.datestringValues.months[this.date.getMonth()]
  }
}
