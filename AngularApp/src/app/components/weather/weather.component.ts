import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weather } from '../../model/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() weather: Weather;
  @Output() detail: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDetail() {
    this.detail.emit();
  }

}
