import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Blackboard, BlackboardLarge } from './model/blackboard';
import { Defaults } from './model/defaults';
import { WeatherDetail } from './model/weather';
import { ShortPlan } from './model/plan';
import { Schedule } from './model/schedule';
import { Mail } from './model/events-detail';
import { Room, Professor, Learning } from './model/room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  scenarios = [
    { link: 'mcilab', label: 'MCI Lab' },
    { link: 'itslab', label: 'ITS Lab' },
    { link: 'blackboard', label: 'Blackboard' },
    { link: 'corridor1', label: 'Corridor 1' },
    { link: 'corridor2', label: 'Corridor 2' },
    { link: 'entry', label: 'Entry' },
    { link: 'machine', label: 'Machine' },
    { link: 'overlight', label: 'Overlight' },
    { link: 'proprof', label: 'Project and Professor' },
    { link: 'roof', label: 'Roof' },
    { link: 'secretariat', label: 'Secretariat' },
    { link: 'stage', label: 'Stage' }
  ];
  scenarioForm: FormControl;

  // temporary
  learning: Learning[] = Defaults.learning;

  constructor(
    private router: Router
  ){
    this.scenarioForm = new FormControl();
  }

  ngOnInit() {
    this.scenarioForm.setValue(this.scenarios[0].link);
    this.onScenario();
  }

  onScenario() {
    this.router.navigateByUrl(this.scenarioForm.value);
  }
}
