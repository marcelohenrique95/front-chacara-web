import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chacara-web';

  private readonly urlLogin = 'login';
  private readonly urlHome = 'home;'

  constructor(private router: Router) {}

  checkLogin(): boolean {
    let url = this.router.url;
    if(url.includes(this.urlLogin)) {
      return false;
    }
    return true;
  }
}
