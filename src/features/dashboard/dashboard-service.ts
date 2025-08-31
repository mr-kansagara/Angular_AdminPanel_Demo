import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  home(){
    return 'Welcome to the Dashboard';
  }

  getUserData() {
    return { id: 1, name: 'John Doe' };
  }

  getAdminData() {
    return { id: 1, name: 'Admin User', role: 'admin' };
  }

}
