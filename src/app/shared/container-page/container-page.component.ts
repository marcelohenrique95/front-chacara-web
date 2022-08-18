import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.scss']
})
export class ContainerPageComponent implements OnInit {

  @Input() title: string;
  @Input() isForm: boolean;

  constructor(private location: Location) {
    this.isForm = false;
   }

  ngOnInit(): void {
  }

  back(): void{ 
    this.location.back();
  }

}
