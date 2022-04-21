import { ReservaService } from './core/service/reserva.service';
import { OrcamentoService } from './core/service/orcamento.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsIncludeService } from './core/service/items-include.service';
import { HomeModule } from './module/home/home.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    ItemsIncludeService,
    OrcamentoService,
    ReservaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
