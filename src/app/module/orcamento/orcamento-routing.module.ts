import { OrcamentoComponent } from './../orcamento/orcamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealizaOrcamentoComponent } from './realiza-orcamento/realiza-orcamento.component';

const routes: Routes = [
  {
    path: '',
    component: OrcamentoComponent,
    children: [
      { path: '', component: RealizaOrcamentoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrcamentoRoutingModule { }
