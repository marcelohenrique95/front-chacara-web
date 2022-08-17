import { ToastrService } from 'ngx-toastr';
import { Cliente } from './../../../core/model/cliente.model';
import { ClienteService } from './../../../core/service/cliente.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClienteConstants } from '../cliente.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit, OnDestroy {

  menu_list = ClienteConstants.HEADER_TITLE_LISTA_CLIENTE;
  titleList = ClienteConstants.TITLE_LIST_CLIENTES;

  listaCliente: Cliente[] = [];

  loader: boolean = true;
  private subs: Subscription;

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private notification: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getListaClientes();
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getListaClientes(): void {
    this.subs = this.clienteService.getList().subscribe((res) => {
      console.log(res);
      if (res) {
        this.listaCliente = res;
        setTimeout(() => {
          this.loader = false;
          if (res.length === 0) {
            this.notification.info(ClienteConstants.MSG_LIST_CLIENTES_VAZIA);
          }
        }, 1000);
      }
    });
  }

  newCliente() {
    this.router.navigate(['cliente/cadastro-cliente']);
  }

  goToDetail() {
    this.router.navigate(['cliente/cliente-detail']);
  }
}
