import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ENDPOINTS } from '../../../constants/Endpoint.constant';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  public readonly ENDPOINTS = ENDPOINTS;

}
