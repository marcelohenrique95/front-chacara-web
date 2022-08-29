import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Reserva } from './../../../core/model/reserva.model';
import { eventos } from './../../../static/form-orcamento';
import { ReservaService } from './../../../core/service/reserva.service';
import { ToastrService } from 'ngx-toastr';
import { ReservaConstants } from '../reserva.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss'],
})
export class ReservaFormComponent implements OnInit, OnDestroy {

  titlePage = ReservaConstants.TITLE_FORM_RESERVA;

  public listaTpEventos = eventos;

  form: FormGroup;
  private subs: Subscription;

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private reservaService: ReservaService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  initForm() {
    this.form = new FormGroup({
      tpEvento: new FormControl([], Validators.required),
      dataInicio: new FormControl(null, Validators.required),
      dataFim: new FormControl(null, Validators.required),
      situacao: new FormControl(null, Validators.required),
      numConvidados: new FormControl(null, Validators.required),
      valor: new FormControl(null, Validators.required),
      cpfCliente: new FormControl(null, Validators.required),
    })
  }

  getReserva(): Reserva {
    let data = new Reserva();
    data.tpEvento = this.form.controls['tpEvento'].value;
    data.dataEntrada = this.form.controls['dataInicio'].value;
    data.dataSaida = this.form.controls['dataFim'].value;
    data.situacao = this.form.controls['situacao'].value;
    data.convidados = this.form.controls['numConvidados'].value;
    data.valor = this.form.controls['valor'].value;
    console.log(data);
    return data;
  }

  reservar() {
    const reservaForm = this.getReserva();
    this.subs = this.reservaService.create(reservaForm).subscribe(res => {
      this.toastr.success(ReservaConstants.MSG_SUCESSO_FORM_RESERVA);
    })
  }

  clearInputs(): void {
    this.form.controls['cpfCliente'].setValue('');
    this.form.controls['tpEvento'].setValue('');
    this.form.controls['dataInicio'].setValue('');
    this.form.controls['dataFim'].setValue('');
    this.form.controls['situacao'].setValue('');
    this.form.controls['numConvidados'].setValue('');
    this.form.controls['valor'].setValue('');
    this.toastr.info(ReservaConstants.MSG_CAMPOS_RESERVA);
  }

  cancel(): void {
    this.location.back();
  }

  get f() {
    return this.form.controls;
  }
}
