import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.scss']
})
export class ImportantComponent implements OnInit {

  @Output() learn: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onLearn() {
    this.learn.emit();
  }

}
