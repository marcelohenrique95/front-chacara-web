import { RealizaOrcamentoComponent } from './realiza-orcamento/realiza-orcamento.component';
import { OrcamentoComponent } from './../orcamento/orcamento.component';
import { OrcamentoRoutingModule } from './orcamento-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfPipe } from 'src/app/core/pipe/cpf.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CpfPipe,
    OrcamentoComponent,
    RealizaOrcamentoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrcamentoRoutingModule
  ]
})
export class OrcamentoModule { }
