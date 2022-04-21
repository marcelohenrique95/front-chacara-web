import { Reserva } from './../model/reserva.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class ReservaService extends BaseService<Reserva> {
  constructor(public http: HttpClient) {
    super(http);
  }

  public getPathModule(): string {
    return 'reserva/';
  }
}
