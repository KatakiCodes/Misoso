import { Component } from '@angular/core';
import { TopBaseLayout } from "../../components/top-base-layout/top-base-layout";
import { Card } from "../../components/card/card";
import { DashboardContent } from "../../components/dashboard-content/dashboard-content";

@Component({
  selector: 'app-dashboard',
  imports: [TopBaseLayout, Card, DashboardContent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
