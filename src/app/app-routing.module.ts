import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
    path: 'reserva',
    loadChildren: () => import('./module/reserva/reserva.module').then(m => m.ReservaModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./module/contato/contato.module').then(m => m.ContatoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
