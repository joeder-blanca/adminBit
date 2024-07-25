import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAboutComponent } from './pages/servicos/admin-about/admin-about.component';
import { DinnerAboutComponent } from './pages/servicos/dinner-about/dinner-about.component';
import { VendaComponent } from './pages/admin/pedidos/venda/venda.component';

const routes: Routes = [

  // {path: '',pathMatch:'full', redirectTo:'/admin-about'},
  {path: 'admin-about', component: AdminAboutComponent},
  {path: 'dinner-about', component: DinnerAboutComponent},

  {
    path: 'admin',
      loadChildren: () => import('./pages/admin/admin.module')
       .then(m => m.AdminModule)
  },
  {
    path: 'dinner',
      loadChildren: () => import('./pages/dinner/dinner.module')
      .then(m => m.DinnerModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
