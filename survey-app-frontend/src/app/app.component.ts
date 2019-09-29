import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'survey-app-frontend';

  loggedIn = true;

  ngOnInit() {
    if(sessionStorage.getItem('name')) {
      this.loggedIn = true;
    }
  }
}
