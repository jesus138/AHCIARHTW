import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/model/topic';
import { Schedule } from 'src/app/model/schedule';
import { Defaults } from 'src/app/model/defaults';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  topics: Topic[] = [
    { label: 'schedule', checked: true }
  ];

  schedule: Schedule = Defaults.scheduleMci;
  isSchedule = true;

  constructor() { }

  ngOnInit() {
  }

  onTopicChange(change: Topic) {
    this.isSchedule = change.checked;
  }

}
