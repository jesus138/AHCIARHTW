import { Component, OnInit, Input } from '@angular/core';

import { Blackboard, BlackboardEntry } from '../../model/blackboard';

@Component({
  selector: 'app-blackboard',
  templateUrl: './blackboard.component.html',
  styleUrls: ['./blackboard.component.scss']
})
export class BlackboardComponent implements OnInit {

  @Input() blackboard: Blackboard;

  large = true;

  constructor() { }

  ngOnInit() {
  }

}
