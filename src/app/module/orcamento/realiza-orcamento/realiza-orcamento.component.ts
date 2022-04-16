import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dias, eventos, horario, invites } from 'src/app/static/form-orcamento';

@Component({
  selector: 'app-realiza-orcamento',
  templateUrl: './realiza-orcamento.component.html',
  styleUrls: ['./realiza-orcamento.component.scss']
})
export class RealizaOrcamentoComponent implements OnInit {

  public orcamentoForm!: FormGroup;

  public listaTpEventos = eventos;
  public listaData = dias;
  public listaHora = horario;
  public listaConvidados = invites;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.orcamentoForm = this.fb.group({
      selectTypeEvent: [null, Validators.required],
      selectDay: [null, Validators.required],
      selectNumberInvites: [null, Validators.required],
      selectHour: [null, Validators.required]
    })
  }

  confirma() {
    
  }

  clearInputs() {
    this.orcamentoForm.get('selectTypeEvent')?.reset();
    this.orcamentoForm.get('selectDay')?.reset();
    this.orcamentoForm.get('selectNumberInvites')?.reset();
    this.orcamentoForm.get('selectHour')?.reset();
  }

}
