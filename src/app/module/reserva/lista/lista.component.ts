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
  menu_list = ['Cliente', 'Data Entrada', 'Data Saída', 'Situação', 'Valor'];
  listaReserva: Reserva[] = [];

  loader: boolean = true;

  constructor(private router: Router, private reservaService: ReservaService) {}

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
        }, 1000);
      }
    });
  }

  newReserva() {
    this.router.navigate(['reserva/cadastro-reserva']);
  }

  detalheReserva() {}
}
