import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { RedeSocialComponent } from './rede-social/rede-social.component';
import { TelefoneComponent } from './telefone/telefone.component';

const routes: Routes = [
  {
    path: '',
    component: ContatoComponent,
    children: [
      { path: 'telefone', component: TelefoneComponent },
      { path: 'endereco', component: EnderecoComponent },
      { path: 'rede-social', component: RedeSocialComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
