import { Component, OnInit } from '@angular/core';
import { BlackboardLarge } from 'src/app/model/blackboard';
import { Defaults } from 'src/app/model/defaults';
import { Topic } from 'src/app/model/topic';

@Component({
  selector: 'app-blackboard-scen',
  templateUrl: './blackboard-scen.component.html',
  styleUrls: ['./blackboard-scen.component.scss']
})
export class BlackboardScenComponent implements OnInit {

  topics: Topic[] = [
    { label: 'blackboard', checked: true }
  ];

  blackboard: BlackboardLarge = Defaults.blackboardDetail;
  isBlackboard = true;

  constructor() { }

  ngOnInit() {
  }

  onTopicChange(change: Topic) {
    this.isBlackboard = change.checked;
  }

}
