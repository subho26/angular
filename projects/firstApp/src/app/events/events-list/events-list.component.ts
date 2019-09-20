import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events: any[];
  
  constructor(private eventService: EventServiceService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
} 
