import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/static/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu_options = menu;
  
  constructor() { }

  ngOnInit(): void {
  }

}
