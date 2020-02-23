import { Component, OnInit, Input } from '@angular/core';
import { WeatherDetail, Weather } from 'src/app/model/weather';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {

  @Input() today: WeatherDetail;
  @Input() tomorrow: WeatherDetail;
  @Input() date: Date;

  isToday: boolean;
  detail: WeatherDetail;

  constructor() {  }

  ngOnInit() {
    this.isToday = true;
    this.detail = this.today;
  }

  getTomorrow(): Date {
    const datecp = new Date(this.date.getTime());
    const tom = new Date(datecp.setDate(datecp.getDate() + 1));
    return tom;
  }

  select(today: boolean) {
    this.isToday = today;
    if (this.isToday) {
      this.detail = this.today;
    } else {
      this.detail = this.tomorrow;
    }
  }

}
