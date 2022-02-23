import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { RedeSocialComponent } from './rede-social/rede-social.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { TelefoneComponent } from './telefone/telefone.component';


@NgModule({
  declarations: [
    ContatoComponent,
    RedeSocialComponent,
    EnderecoComponent,
    TelefoneComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule
  ]
})
export class ContatoModule { }
