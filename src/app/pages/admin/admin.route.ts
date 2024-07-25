import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAppComponent } from './admin.component';
import { IndexComponent } from './index/index.component';
import { ReceitaComponent } from './financeiro/receita/receita.component';
import { DespesaComponent } from './financeiro/despesa/despesa.component';
import { ContasComponent } from './financeiro/contas/contas.component';
import { FluxoComponent } from './financeiro/fluxo/fluxo.component';
import { ProfileComponent } from './profile/profile.component';
import { PlanejamentoComponent } from './financeiro/planejamento/planejamento.component';
import { CompraComponent } from './pedidos/compra/compra.component';
import { VendaComponent } from './pedidos/venda/venda.component';
import { DashboardComponent } from './pedidos/dashboard/dashboard.component';
import { CadastroComponent } from './configuracoes/cadastro/cadastro.component';
import { HomeComponent } from './pdv/home/home.component';
import { PainelComponent } from './pdv/painel/painel.component';

const AdminRoutingConfig: Routes = [
  {
    path: '', component: AdminAppComponent,
    children: [
    { path: 'index', component: IndexComponent},
    { path: 'receitas', component: ReceitaComponent},
    { path: 'despesas', component: DespesaComponent},
    { path: 'contas', component: ContasComponent},
    { path: 'fluxo', component: FluxoComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'planejamento', component: PlanejamentoComponent},
    { path: 'compra', component: CompraComponent},
    { path: 'venda', component: VendaComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'cadastros', component: CadastroComponent},
    { path: 'pdv', component: HomeComponent},
    { path: 'pdv-painel', component: PainelComponent},
  
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutingConfig)
  ],
  exports: [RouterModule]
})

export class AdminRoutingModule{}
