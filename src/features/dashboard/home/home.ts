import { Component } from '@angular/core';
import { DashboardService } from '../dashboard-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private dashboardService: DashboardService) {}

  getHomeMessage() {
    return this.dashboardService.home();
  }

  getUserData() {
    return this.dashboardService.getUserData();
  }

  getAdminData() {
    return this.dashboardService.getAdminData();
  }

}
