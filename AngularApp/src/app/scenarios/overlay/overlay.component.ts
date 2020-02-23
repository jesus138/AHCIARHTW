import { Component, OnInit } from '@angular/core';
import { Blackboard } from 'src/app/model/blackboard';
import { Defaults } from 'src/app/model/defaults';
import { Weather, WeatherDetail } from 'src/app/model/weather';
import { Learning } from 'src/app/model/room';
import { ShortPlan } from 'src/app/model/plan';
import { EventsDetail, Mail } from 'src/app/model/events-detail';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  // components
  blackboard: Blackboard = Defaults.blackboard;
  weather: Weather = Defaults.weather;
  weatherToday: WeatherDetail = Defaults.weatherToday;
  weatherTomorrow: WeatherDetail = Defaults.weatherTomorrow;
  date: Date = new Date(2020, 1, 23);
  learning: Learning[] = Defaults.learning;
  shortPlan: ShortPlan = Defaults.shortPlan;
  events: EventsDetail = Defaults.eventsDetail;
  mail: Mail = Defaults.mail;
  // state
  isLearning = false;
  isWeatherDetail = false;
  mapLarge = false;
  isEmail = false;

  constructor() { }

  ngOnInit() {
  }

}
