import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ListComponent
  ],
  exports : [
    HeaderComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ]
})
export class SharedModule { }
