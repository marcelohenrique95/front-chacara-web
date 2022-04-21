import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

import { ClienteComponent } from './cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: '',
        component: ListaComponent
      },
      {
        path: 'lista-cliente',
        component: ListaComponent
      },
      {
        path: 'cadastro-cliente',
        component: ClienteFormComponent
      }, 
      {
        path: ':id/cliente-detail',
        component: ClienteDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
