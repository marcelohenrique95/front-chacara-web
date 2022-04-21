import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaComponent } from './reserva.component';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';
import { ListaComponent } from './lista/lista.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';


@NgModule({
  declarations: [
    ReservaComponent,
    ReservaFormComponent,
    ListaComponent,
    ReservaDetailComponent,
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class ReservaModule { }
