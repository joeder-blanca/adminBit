import { AuthService } from '../../shared/services/auth.service';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';

interface MenuItem {
  title: string;
  link: string;
  claim: string;
}

@Component({
    selector: 'dinner-app-root',
    templateUrl: './dinner.component.html',
    styleUrls: ['./dinner.component.css']
})
export class DinnerAppComponent {
  menuItems: MenuItem[] = [
    { title: 'Painel', link: './painel', claim: 'STANDARD' },
  ];

  filteredMenuItems: MenuItem[] = [];
  _user: any = {};
  isCollapsed = true;
  userLabel: string = '';

  constructor(
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.obtemClaims();
  }

  obtemClaims() {
    const user = localStorage.getItem('bitADMIN.user');
    
    if (user) {
      this._user = JSON.parse(user);

      if (this._user && Array.isArray(this._user.claims)) {
        this.userLabel = this._user.username;
        const standardRoles = this._user.claims.some((claim: any) => claim.type === 'role' && claim.value === 'STANDARD');
  
        if (standardRoles) {
          this.filteredMenuItems = this.menuItems.filter(item => item.claim === 'STANDARD');
        }
      } else {
        console.error('Estrutura do token de usuário inválida:', this._user);
      }
    } else {
      console.error('Usuário não encontrado no localStorage');
    }
  }
  

  isAuthenticated(): boolean {
    // if (!this.authService.loggedIn) {
    //   this.router.navigate(['/admin-about']);
    //   return false;
    // }
    return true;
  }

  logout(){
    this.authService.logout();
    this.isAuthenticated();
  }
}