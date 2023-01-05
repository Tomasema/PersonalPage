import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created !'
  serverName = ''

  // Property binding
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !false;
    }, 2000);
  }

  // Event binding
  onCreatedServer() {
    this.serverCreationStatus = 'Server was created'
  }

  // Vinculation Events type $event.
  onUpdateServerName(event: Event) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
