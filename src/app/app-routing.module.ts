import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ReceitaComponent } from './pages/financeiro/receita/receita.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: '',pathMatch:'full', redirectTo:'/home'},
  {path: 'home', component: HomeComponent},

  // {
  //   path: 'cadastros',
  //     loadChildren: () => import('./pages/cadastros/cadastros.module')
  //      .then(m => m.CadastrosModule)
  // },

  // { path: 'home', component: HomeComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'receitas', component: ReceitaComponent},
  // { path: 'cadastro', component: CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
