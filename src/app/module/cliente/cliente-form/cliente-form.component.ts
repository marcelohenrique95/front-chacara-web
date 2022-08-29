import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ClienteService } from './../../../core/service/cliente.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteConstants } from '../cliente.constants';
import { Cliente } from 'src/app/core/model/cliente.model';

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

  initForm(): void {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl(null, Validators.required),
      cidade: new FormControl(null, Validators.required),
      bairro: new FormControl(null, Validators.required),
      numero: new FormControl(null, Validators.required),
    });

  }

  montaEndereco(): string {
    let endereco = this.form.controls['cidade'].value
      endereco += ', ' + this.form.controls['bairro'].value;
      endereco += ', ' + this.form.controls['numero'].value;
    return endereco;
  }

  getCliente(): Cliente {
    let data = new Cliente();
    data.nome = this.form.controls['nome'].value;
    data.cpf = this.form.controls['cpf'].value;
    data.telefone = this.form.controls['telefone'].value;
    data.email = this.form.controls['email'].value;
    data.endereco = this.montaEndereco();

    return data;
  }

  rossuter() {
    this.router.navigate(['cliente/lista-cliente']);
  }

  save() {
    this.form.markAsDirty();
    const clienteForm = this.getCliente();
    
    if(this.form.valid) {
      this.clienteService.create(clienteForm).subscribe(() => {
        this.notification.success(ClienteConstants.MSG_SUCESSO_CAD_CLIENTE);
        this.router.navigate(['cliente/lista-cliente']);
      });
    } else {
      this.validateForm();
    }
  }

  cancel(): void {
    this.location.back();
  }

  validateForm(): void {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control.markAsTouched({ onlySelf: true });    
    });
  }

  get f() {
    return this.form.controls;
  }
}
