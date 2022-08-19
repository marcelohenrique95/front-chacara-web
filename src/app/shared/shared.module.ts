import { CpfPipe } from 'src/app/core/pipe/cpf.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ContainerPageComponent } from './container-page/container-page.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ListComponent,
    ContainerPageComponent,
    SearchComponent,
  ],
  exports : [
    HeaderComponent,
    CardComponent,
    ListComponent,
    ContainerPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
