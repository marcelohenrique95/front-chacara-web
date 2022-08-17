import { ToastrService } from 'ngx-toastr';
import { ReservaConstants } from './../reserva.constants';
import { Reserva } from './../../../core/model/reserva.model';
import { ReservaService } from './../../../core/service/reserva.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit, OnDestroy {

  titlePage = ReservaConstants.TITLE_LISTA_RESERVA;
  menu_list = ReservaConstants.HEADER_TITLE_LISTA_RESERVA;

  listaReserva: Reserva[] = [];

  loader: boolean = true;
  private subs: Subscription;

  constructor(
    private router: Router, 
    private reservaService: ReservaService,
    private notification: ToastrService,
    ) {}

  ngOnInit(): void {
    this.getListaReservas();
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getListaReservas() {
    this.subs = this.reservaService.getList().subscribe((res) => {
        this.listaReserva = res;
        console.log(this.listaReserva);
        setTimeout(() => {
          this.loader = false;
          if(res.length === 0){
            this.notification.info(ReservaConstants.MSG_LISTA_RESERVA_VAZIA);
          }
        }, 1000);
    }, err => {
      this.loader = false;
    });
  }

  newReserva(): void {
    this.router.navigate(['reserva/cadastro-reserva']);
  }

  detalheReserva() {}
}
