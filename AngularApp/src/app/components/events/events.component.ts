import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventsDetail } from 'src/app/model/events-detail';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() events: EventsDetail;

  @Output() toggleAnnounces: EventEmitter<void> = new EventEmitter();
  @Output() toggleEmail: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAnnounces() {
    this.toggleAnnounces.emit();
  }

  onEmail() {
    this.toggleEmail.emit();
  }

}
