import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dias, eventos, horario, invites } from 'src/app/static/form-orcamento';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  public orcamentoForm!: FormGroup;

  public listaTpEventos = eventos;
  public listaData = dias;
  public listaHora = horario;
  public listaConvidados = invites;

  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.orcamentoForm = this.fb.group({
      selectTypeEvent: [null],
      selectDay: [null],
      selectNumberInvites: [null],
      selectHour: [null]
    })
  }

  reservar() {

  }

  cancel() {
    
  }

}
