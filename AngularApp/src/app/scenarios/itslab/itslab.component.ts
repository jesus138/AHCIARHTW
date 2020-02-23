import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/model/topic';
import { Project, Room } from 'src/app/model/room';
import { Defaults } from 'src/app/model/defaults';

@Component({
  selector: 'app-itslab',
  templateUrl: './itslab.component.html',
  styleUrls: ['./itslab.component.scss']
})
export class ItslabComponent implements OnInit {

  topics: Topic[] = [
    { label: 'project', checked: true },
    { label: 'room', checked: true }
  ];

  project: Project = Defaults.projectGraph;
  isProject = true;
  room: Room = Defaults.roomMci;
  isRoom = true;

  constructor() { }

  ngOnInit() {
  }

  onTopicChange(topic: Topic) {
    switch (topic.label) {
      case 'project':
        this.isProject = topic.checked;
        break;
      case 'room':
        this.isRoom = topic.checked;
        break;
    }
  }

}
