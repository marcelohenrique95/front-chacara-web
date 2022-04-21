import { Cliente } from './../../../core/model/cliente.model';
import { ClienteService } from './../../../core/service/cliente.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteConstants } from '../cliente.constants';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  titleList = ClienteConstants.TITLE_LIST_CLIENTES;

  listaCliente: Cliente[] = [];

  loader: boolean = true;

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  getListaClientes(): void {

  }

  newCliente() {
    this.router.navigate(['cliente/cadastro-cliente']);
  }

  goToDetail()  {
    this.router.navigate(['cliente/cliente-detail']);
  }

}
