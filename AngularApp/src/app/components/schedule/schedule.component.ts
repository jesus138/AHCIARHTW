import { Component, OnInit, Input } from '@angular/core';
import { ScheduleEntry, Schedule, scheduleTable } from 'src/app/model/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @Input() schedule: Schedule;

  table: ScheduleEntry[][];

  constructor() { }

  ngOnInit() {
    this.table = scheduleTable(this.schedule);
  }

  headrow(): ScheduleEntry[] {
    return this.table[0];
  }

  body(): ScheduleEntry[][] {
    return this.table.slice(1, this.table.length);
  }

}
