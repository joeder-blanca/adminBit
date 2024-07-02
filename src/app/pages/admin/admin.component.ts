import { AuthService } from '../../shared/services/auth.service';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'admin-app-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminAppComponent {
  isCollapsed = false;
  user: string = '';

  constructor(
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('bitADMIN.user');
    if (userJson) {
      const user = JSON.parse(userJson);
      this.user = user.username;
    } else {
      console.error('Usuário não encontrado');
    }
  }

  isAuthenticated(): boolean {
    //return this.authService.loggedIn;
    return true;
  }

  logout(){
    this.authService.logout();
    this.isAuthenticated();
  }
}
