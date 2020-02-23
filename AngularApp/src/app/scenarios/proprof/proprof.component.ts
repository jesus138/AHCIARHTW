import { Component, OnInit } from '@angular/core';
import { Defaults } from 'src/app/model/defaults';
import { Project, Professor } from 'src/app/model/room';
import { Topic } from 'src/app/model/topic';

@Component({
  selector: 'app-proprof',
  templateUrl: './proprof.component.html',
  styleUrls: ['./proprof.component.scss']
})
export class ProprofComponent implements OnInit {

  topics: Topic[] = [
    { label: 'project', checked: true },
    { label: 'professor', checked: true }
  ];

  project: Project = Defaults.projectGraph;
  isProject = true;
  prof: Professor = Defaults.profRoth;
  isProf = true;

  constructor() { }

  ngOnInit() {
  }

  onTopicChange(change: Topic) {
    switch (change.label) {
      case 'project':
        this.isProject = change.checked;
        break;
      case 'professor':
        this.isProf = change.checked;
        break;
    }
  }

}
