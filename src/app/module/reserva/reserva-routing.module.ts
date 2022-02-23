import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { RealizaReservaComponent } from './realiza-reserva/realiza-reserva.component';
import { ReservaComponent } from './reserva.component';

const routes: Routes = [
  {
    path: '',
    component: ReservaComponent,
    children: [
      { path: '', component: OrcamentoComponent},
      { path: 'realiza-reserva', component: RealizaReservaComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
