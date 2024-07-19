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
    { path: 'planejamento', component: PlanejamentoComponent}
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
