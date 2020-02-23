import { Component, OnInit } from '@angular/core';

import { Blackboard, BlackboardLarge } from '../../model/blackboard';
import { Weather, WeatherType, WeatherDetail } from '../../model/weather';
import { Defaults } from '../../model/defaults';
import { ShortPlan } from 'src/app/model/plan';
import { EventsDetail, Mail } from 'src/app/model/events-detail';
import { scheduleTable, Schedule } from 'src/app/model/schedule';
import { Room, Professor, Learning, Project } from 'src/app/model/room';
import { Topic } from 'src/app/model/topic';

@Component({
  selector: 'app-mcilab',
  templateUrl: './mcilab.component.html',
  styleUrls: ['./mcilab.component.scss']
})
export class McilabComponent implements OnInit {

  blackboard: Blackboard = Defaults.blackboard;

  weather: Weather = Defaults.weather;
  isWeatherDetail = false;

  weatherToday: WeatherDetail = Defaults.weatherToday;
  weatherTomorrow: WeatherDetail = Defaults.weatherTomorrow;
  date: Date = new Date(2020, 1, 20);

  blackboardDetail: BlackboardLarge = Defaults.blackboardDetail;
  isBlackboardDetail = false;

  shortPlan: ShortPlan = Defaults.shortPlan;

  mapLarge = false;

  events: EventsDetail = Defaults.eventsDetail;
  isEmail = false;
  isAnnounces = false;
  mail: Mail = Defaults.mail;

  learning: Learning[] = Defaults.learning;
  isLearning = false;

  scheduleMci: Schedule = Defaults.scheduleMci;
  roomMci: Room = Defaults.roomMci;
  prof: Professor = Defaults.profRoth;
  project: Project = Defaults.projectGraph;

  topics: Topic[] = [
    { label: 'schedule', checked: false },
    { label: 'room', checked: false },
    { label: 'prof', checked: false },
    { label: 'blackboard', checked: false },
    { label: 'project', checked: false }
  ];
  isSchedule = false;
  isRoom = false;
  isProf = false;
  isProject = false;

  constructor() {
  }

  ngOnInit() {
  }

  onTopicChange(change: Topic) {
    if (change.label === 'schedule') {
      this.isSchedule = change.checked;
    } else if (change.label === 'room') {
      this.isRoom = change.checked;
    } else if (change.label === 'prof') {
      this.isProf = change.checked;
    } else if (change.label === 'blackboard') {
      this.isBlackboardDetail = change.checked;
    } else if (change.label === 'project') {
      this.isProject = change.checked;
    }
  }

}
