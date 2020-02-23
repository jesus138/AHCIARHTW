import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-blackboard-config',
  templateUrl: './blackboard-config.component.html',
  styleUrls: ['./blackboard-config.component.scss']
})
export class BlackboardConfigComponent implements OnInit {

  @Output() detailChange = new EventEmitter<boolean>();

  formDetail: FormControl;

  constructor() { }

  ngOnInit() {
    this.formDetail = new FormControl(false);
    this.formDetail.valueChanges.subscribe(val => {
      const isdetail = val as boolean;
      this.detailChange.emit(isdetail);
    });
  }

}
