import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
