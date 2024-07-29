import { AuthService } from '../../shared/services/auth.service';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';

interface MenuItem {
  title: string;
  link: string;
  claim: string[];
}



@Component({
  selector: 'admin-app-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminAppComponent {

  menuFinanceiro: MenuItem[] = [
    { title: 'Receitas', link: './receitas', claim: ['STANDARD', 'PRO', 'MASTER', 'ADMIN'] },
    { title: 'Despesas', link: './despesas', claim: ['STANDARD', 'PRO', 'MASTER', 'ADMIN'] },
    { title: 'Pagar/Receber', link: './contas', claim: ['STANDARD', 'PRO', 'MASTER', 'ADMIN'] },
    { title: 'Fluxo de Caixa', link: './fluxo', claim: ['STANDARD', 'PRO', 'MASTER', 'ADMIN'] },
    { title: 'Planejamento', link: './planejamento', claim: ['STANDARD', 'PRO', 'MASTER', 'ADMIN'] }
  ];
  

  menuPedidos: MenuItem[] = [
    { title: 'Dashboard', link: './dashboard', claim: ['STANDARD', 'PRO', 'MASTER', 'ADMIN'] },
    { title: 'Compras', link: './compra', claim: ['STANDARD', 'PRO', 'MASTER', 'ADMIN'] },
    { title: 'Vendas', link: './venda', claim: ['STANDARD', 'PRO', 'MASTER', 'ADMIN'] },
  ];
  

  menuPDV: MenuItem[] = [
    { title: 'Caixas', link: './pdv', claim: ['STANDARD', 'PRO', 'MASTER', 'ADMIN'] },
  ];
  

  menuCadastros: MenuItem[] = [
    { title: 'Cadastros', link: './cadastros', claim: ['STANDARD', 'PRO', 'MASTER', 'ADMIN'] },
  ];
  

  filteredMenuItems: MenuItem[] = [];
  _user: any = {};
  isCollapsed = true;
  visible = false;
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
        const allowedRoles = ['STANDARD', 'PRO', 'MASTER', 'ADMIN'];
        const userRoles = this._user.claims
          .filter((claim: any) => claim.type === 'role')
          .map((claim: any) => claim.value);
  
        this.filteredMenuItems = this.menuFinanceiro.filter(item =>
          item.claim.some((claim: string) => userRoles.includes(claim))
        );
      } else {
        console.error('Estrutura do token de usuário inválida:', this._user);
      }
    } else {
      console.error('Usuário não encontrado no localStorage');
    }
  }
  
  

  isAuthenticated(): boolean {
    if (!this.authService.loggedIn) {
      this.router.navigate(['/admin-about']);
      return true;
    }
    return true;
  }

  logout(){
    this.authService.logout();
    this.isAuthenticated();
  }

  open(): void {
    this.visible = true;
    this.isCollapsed = false;
  }

  close(): void {
    this.visible = false;
    this.isCollapsed = true;
  }
}
