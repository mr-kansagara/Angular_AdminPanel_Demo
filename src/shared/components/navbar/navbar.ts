import { Component } from '@angular/core';
import { DashboardRoutingModule } from "../../../features/dashboard/dashboard-routing-module";
import { ENDPOINTS } from '../../../constants/Endpoint.constant';

@Component({
  selector: 'app-navbar',
  imports: [DashboardRoutingModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  public readonly ENDPOINTS = ENDPOINTS;
  
}
