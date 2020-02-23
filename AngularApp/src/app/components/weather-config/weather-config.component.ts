import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Weather, WeatherType } from 'src/app/model/weather';
import { Defaults } from '../../model/defaults';


@Component({
  selector: 'app-weather-config',
  templateUrl: './weather-config.component.html',
  styleUrls: ['./weather-config.component.scss']
})
export class WeatherConfigComponent implements OnInit {

  @Output() weatherChange: EventEmitter<Weather> = new EventEmitter();
  @Output() detailChange: EventEmitter<boolean> = new EventEmitter();

  weather: Weather = Defaults.weather;
  formWeather: FormGroup;
  weatherTypes = [
    { label: 'Sunny', value: 'sunny' },
    { label: 'Rain', value: 'rain' },
    { label: 'Fog', value: 'fog' },
    { label: 'Cloudy', value: 'cloudy' },
    { label: 'Clouds', value: 'clouds' },
    { label: 'Snow', value: 'snow' },
  ];

  constructor() {
    this.formWeather = new FormGroup({
      time: new FormControl(this.weather.time),
      weather: new FormControl(this.weather.weather),
      temperature: new FormControl(this.weather.temperature),
      detail: new FormControl(false)
    });
    this.onWeatherChange();
  }

  ngOnInit() {
  }

  onWeatherChange() {
    this.formWeather.valueChanges.subscribe(value => {
      this.weather.time = value.time;
      this.weather.weather = value.weather;
      this.weather.temperature = value.temperature;
      const isdetail = Boolean(value.detail);
      this.weatherChange.emit(this.weather);
      this.detailChange.emit(isdetail);
    });
  }


}
