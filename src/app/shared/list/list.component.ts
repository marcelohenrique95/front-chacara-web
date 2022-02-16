import { Component, Input, OnInit } from '@angular/core';
import { ItemInclude } from 'src/app/core/model/item-include.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() listItem?: ItemInclude[] = [];

  public readonly titleList = 'Inclusos na locação';

  constructor() { }

  ngOnInit(): void {
  }

}
