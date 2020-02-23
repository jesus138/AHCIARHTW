import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() local: string;
  @Input() global: string;
  @Input() large: boolean;
  @Output() toggle: EventEmitter<void> = new EventEmitter();

  map: string;
  islocal: boolean;

  constructor() { }

  ngOnInit() {
    this.setMode(true);
  }

  setMode(local: boolean) {
    this.islocal = local;
    if(this.islocal) {
      this.map = this.local;
    }else {
      this.map = this.global;
    }
  }

  onToggle() {
    this.toggle.emit();
  }

}
