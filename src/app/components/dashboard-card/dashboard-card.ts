import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  imports: [RouterLink],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.scss'
})
export class DashboardCard {
  @Input() title:string;
  @Input() value:number;
  @Input() url:string;
}
