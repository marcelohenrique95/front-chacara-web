import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaComponent } from './reserva.component';
import { CpfPipe } from 'src/app/core/pipe/cpf.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { RealizaReservaComponent } from './realiza-reserva/realiza-reserva.component';


@NgModule({
  declarations: [
    ReservaComponent,
    CpfPipe,
    OrcamentoComponent,
    RealizaReservaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReservaRoutingModule
  ]
})
export class ReservaModule { }
