import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ReceitaComponent } from './pages/financeiro/receita/receita.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminAboutComponent } from './pages/servicos/admin-about/admin-about.component';

const routes: Routes = [

  { path: '',pathMatch:'full', redirectTo:'/home'},
  {path: 'home', component: HomeComponent},
  {path: 'admin-about', component: AdminAboutComponent},

  {
    path: 'admin',
      loadChildren: () => import('./pages/admin/admin.module')
       .then(m => m.AdminModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
