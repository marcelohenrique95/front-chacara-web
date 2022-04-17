import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reserva } from './../../../core/model/reserva.model';
import { eventos } from './../../../static/form-orcamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ReservaService } from './../../../core/service/reserva.service';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss'],
})
export class ReservaFormComponent implements OnInit {

  public listaTpEventos = eventos;

  formReserva: FormGroup;

  reserva: Reserva;

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private reservaService: ReservaService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    console.log('Entrou no form');
  }

  initForm() {
    this.formReserva = this.fb.group({
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, Validators.required],
      cpf: [null, Validators.required],
      endereco: [null, Validators.required],
      tpEvento: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required],
      situacao: [null, Validators.required],
      numConvidados: [null, Validators.required],
    });
  }

  getReserva(): Reserva {
    this.reserva = new Reserva();
    this.reserva.pessoa.nome = this.formReserva.get('nome')!.value;
    this.reserva.pessoa.telefone = this.formReserva.get('telefone')!.value;
    this.reserva.pessoa.email = this.formReserva.get('email')!.value;
    this.reserva.pessoa.endereco = this.formReserva.get('endereco')!.value;
    this.reserva.tpEvento = this.formReserva.get('tpEvento')!.value;
    this.reserva.dataEntrada = this.formReserva.get('dataInicio')!.value;
    this.reserva.dataSaida = this.formReserva.get('dataFim')!.value;
    this.reserva.situacao = this.formReserva.get('situacao')!.value;
    this.reserva.numConvidados = this.formReserva.get('numConvidados')!.value;

    console.log(this.reserva);
    return this.reserva;
  }

  reservar() {
    const reservaForm = this.getReserva();
  }

  cancel() {
    this.location.back();
  }

  get f() {
    return this.formReserva.controls;
  }
}
