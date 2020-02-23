import { Component, OnInit, Input } from '@angular/core';
import { Learning } from 'src/app/model/room';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  @Input() learning: Learning[];

  constructor() { }

  ngOnInit() {
  }

  getY(l: Learning): number {
    return 30 - l.busy / 100 * 30;
  }

}
