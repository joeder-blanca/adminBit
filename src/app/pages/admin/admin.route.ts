import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAppComponent } from './admin.component';
import { IndexComponent } from './index/index.component';
import { ReceitaComponent } from '../financeiro/receita/receita.component';

const AdminRoutingConfig: Routes = [
  {
    path: '', component: AdminAppComponent,
    children: [
    { path: 'index', component: IndexComponent},
    { path: 'receita', component: ReceitaComponent},
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
