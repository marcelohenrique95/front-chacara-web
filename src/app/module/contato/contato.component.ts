import { Component, OnInit } from '@angular/core';
import { navigation } from 'src/app/static/navigation-contact';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  public navigationOption = navigation;

  constructor() { }

  ngOnInit(): void {
  }

}
