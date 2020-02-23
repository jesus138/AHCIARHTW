import { Component, OnInit, Input } from '@angular/core';
import { ShortPlan } from 'src/app/model/plan';

@Component({
  selector: 'app-short-plan',
  templateUrl: './short-plan.component.html',
  styleUrls: ['./short-plan.component.scss']
})
export class ShortPlanComponent implements OnInit {

  @Input() plan: ShortPlan;

  constructor() { }

  ngOnInit() {
  }

}
