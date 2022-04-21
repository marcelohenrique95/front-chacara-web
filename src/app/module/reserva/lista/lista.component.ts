import { ToastrService } from 'ngx-toastr';
import { ReservaConstants } from './../reserva.constants';
import { Reserva } from './../../../core/model/reserva.model';
import { ReservaService } from './../../../core/service/reserva.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  titlePage = ReservaConstants.TITLE_LISTA_RESERVA;
  menu_list = ReservaConstants.HEADER_TITLE_LISTA_RESERVA;

  listaReserva: Reserva[] = [];

  loader: boolean = true;

  constructor(
    private router: Router, 
    private reservaService: ReservaService,
    private notification: ToastrService
    ) {}

  ngOnInit(): void {
    this.getListaReservas();
  }

  getListaReservas() {
    this.reservaService.getList().subscribe((res) => {
      if (res) {
        this.listaReserva = res;
        console.log(this.listaReserva);
        setTimeout(() => {
          this.loader = false;
          if(res.length === 0){
            this.notification.info(ReservaConstants.MSG_LISTA_RESERVA_VAZIA);
          }
        }, 1000);
      }
    });
  }

  newReserva(): void {
    this.router.navigate(['reserva/cadastro-reserva']);
  }

  detalheReserva() {}
}
