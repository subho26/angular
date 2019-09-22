import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello Angular</h1>
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
}
