import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.scss']
})
export class ContainerPageComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
