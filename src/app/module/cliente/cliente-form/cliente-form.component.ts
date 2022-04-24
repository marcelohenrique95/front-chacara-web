import { Cliente } from './../../../core/model/cliente.model';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from './../../../core/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ClienteConstants } from '../cliente.constants';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss'],
})
export class ClienteFormComponent implements OnInit {

  titlePage = ClienteConstants.TITLE_FORM_CLIENTE;

  form: FormGroup;

  constructor(
    private router: Router,
    private location: Location,
    private clienteService: ClienteService,
    private notification: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      nome: new FormControl([null, Validators.required]),
      cpf: new FormControl([null, Validators.required]),
      telefone: new FormControl([null, Validators.required]),
      email: new FormControl([null]),
      cidade: new FormControl([null, Validators.required]),
      bairro: new FormControl([null, Validators.required]),
      numero: new FormControl([null, Validators.required]),
    });
  }

  montaEndereco(): string {
    const endereco =
      this.form.controls['cidade'].value +
      ', ' +
      this.form.controls['bairro'].value +
      ', ' +
      this.form.controls['numero'].value;
      console.log(endereco);
    return endereco;
  }

  getCliente(): Cliente {
    const data = new Cliente();
    data.nome = this.form.controls['nome'].value;
    data.cpf = this.form.controls['cpf'].value;
    data.telefone = this.form.controls['telefone'].value;
    data.email = this.form.controls['email'].value;
    data.endereco = this.montaEndereco();

    return data;
  }

  cadastrarCliente() {
    const clienteForm = this.getCliente();
    this.clienteService.create(clienteForm).subscribe((res) => {
      this.notification.success(ClienteConstants.MSG_SUCESSO_CAD_CLIENTE);
    });
  }

  cancel(): void {
    this.location.back();
  }

  get f() {
    return this.form.controls;
  }
}
