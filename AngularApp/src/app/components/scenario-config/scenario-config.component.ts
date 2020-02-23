import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Topic } from 'src/app/model/topic';

@Component({
  selector: 'app-scenario-config',
  templateUrl: './scenario-config.component.html',
  styleUrls: ['./scenario-config.component.scss']
})
export class ScenarioConfigComponent implements OnInit {

  @Input() topics: Topic[];
  @Input() title: string;
  @Output() topicChange: EventEmitter<Topic> = new EventEmitter();

  controlMap: Map<string, FormControl>;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.controlMap = new Map();
    for (const topic of this.topics) {
      this.controlMap.set(topic.label, new FormControl(topic.checked));
    }
    const controls = {};
    for (const key of this.controlMap) {
      controls[key[0]] = key[1];
    }
    this.form = new FormGroup(controls);
  }

  onInput(topic: string) {
    const checked = this.controlMap.get(topic).value as boolean;
    this.topicChange.emit({label: topic, checked});
  }

}
