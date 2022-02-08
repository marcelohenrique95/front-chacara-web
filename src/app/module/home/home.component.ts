import { Component, OnInit } from '@angular/core';
import { cardImg } from 'src/app/static/card-fotos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public images = cardImg;

  constructor() { }

  ngOnInit(): void {
  }

}
