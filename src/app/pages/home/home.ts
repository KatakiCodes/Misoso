import { Component } from '@angular/core';
import { BaseLayout } from "../../components/base-layout/base-layout";
import { DashboardCard } from "../../components/dashboard-card/dashboard-card";

@Component({
  selector: 'app-home',
  imports: [BaseLayout, DashboardCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
