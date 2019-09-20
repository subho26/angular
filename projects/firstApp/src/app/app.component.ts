import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello Angular</h1>
  <app-navbar></app-navbar>
  <app-events-list></app-events-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
}
