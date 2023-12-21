import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-login-template';

  showSidebar = false;

  openSidebar() {
    this.showSidebar = true;
  }

  closeSidebar() {
    this.showSidebar = false;
  }
}
