import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinnerAppComponent } from './dinner.component';
import { IndexComponent } from './index/index.component';
import { PainelComponent } from './painel/painel.component';


const DinnerRoutingConfig: Routes = [
  {
    path: '', component: DinnerAppComponent,
     children: [
    { path: 'index', component: IndexComponent},
    { path: 'painel', component: PainelComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(DinnerRoutingConfig)
  ],
  exports: [RouterModule]
})

export class DinnerRoutingModule{}
