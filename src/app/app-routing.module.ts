import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./module/info/info.module').then(m => m.InfoModule)
  },
  {
    path: 'orcamento',
    loadChildren: () => import('./module/orcamento/orcamento.module').then(m => m.OrcamentoModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./module/reserva/reserva.module').then(m => m.ReservaModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./module/contato/contato.module').then(m => m.ContatoModule)
  },
  {
    path: '**',
    loadChildren: () => import('./module/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
