import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemInclude } from 'src/app/core/model/item-include.model';
import { ItemsIncludeService } from 'src/app/core/service/items-include.service';
import { cardImg } from 'src/app/static/card-fotos';
import { social } from 'src/app/static/social';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public images = cardImg;

  public listItemPerDay: ItemInclude[] = [];

  public listSocial = social;

  public urlWhats: string = 'https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5565981234218%26';

  public showInfos: boolean = false;

  constructor(private itemIncludeService: ItemsIncludeService) { }

  ngOnInit(): void {
    this.buscaItems();
  }

  ngOnDestroy(): void {
      
  }

  buscaItems() {
    this.itemIncludeService.getItems().subscribe((res) => {
      if(res) {
        this.listItemPerDay = res;
      }
    })
  }

  goToReserva(): void {
    //location.href(this.urlWhats);
  }

  goToBottom():void {
    window.scrollTo(1000, 1000)
  }

}
