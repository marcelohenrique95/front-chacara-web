import { Cliente } from './../model/cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class ClienteService extends BaseService<Cliente> {
  constructor(public http: HttpClient) {
    super(http);
  }

  public getPathModule(): string {
    return 'cliente/';
  }
}
