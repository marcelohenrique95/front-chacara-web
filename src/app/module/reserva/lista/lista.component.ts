import { ReservaService } from './../../../core/service/reserva.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  menu_list = ['Cliente', 'Data Entrada', 'Data Saída', 'Situação', 'Valor'];

  mock = [
    {nome: 'Cliente teste uummmm', data: '03/05/2022', dataExit: '03/05/2022', situacao: 0, valor: '800,00'},
    {nome: 'Cliente teste doiiis', data: '20/05/2022', dataExit: '03/05/2022', situacao: 1, valor: '720,00'},
    {nome: 'Cliente teste tress', data: '28/05/2022', dataExit: '03/05/2022', situacao: 0, valor: '900,00'},
    {nome: 'Cliente teste quatroo', data: '10/06/2022', dataExit: '03/05/2022', situacao: 1, valor: '1.120,00'},
    {nome: 'Cliente teste cincoo', data: '18/07/2022', dataExit: '03/05/2022', situacao: 1, valor: '600,00'},
  ]

  constructor(private router: Router, private reservaService: ReservaService) { }

  ngOnInit(): void {
  }

  getListaReservas() {

  }

  detalheReserva() {
    
  }

}
