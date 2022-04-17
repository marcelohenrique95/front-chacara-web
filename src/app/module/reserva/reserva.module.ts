import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaComponent } from './reserva.component';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    ReservaComponent,
    ReservaFormComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ReservaModule { }
