import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';
import { ListaComponent } from './lista/lista.component';
import { ReservaComponent } from './reserva.component';

const routes: Routes = [
  {
    path: '',
    component: ReservaComponent,
    children: [
      {
        path: '',
        component: ListaComponent
      },
      {
        path: 'lista-reserva',
        component: ListaComponent
      },
      {
        path: 'cadastro-reserva',
        component: ReservaFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
