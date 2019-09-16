import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  event = {
    id: 1,
    name: "Angular Learn",
    date: '3/4/2019',
    price: 599,
    imageUrl: '/app/assets/images/angular_logo.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
}
