import { Component, OnInit, Input } from '@angular/core';
import { Mail } from 'src/app/model/events-detail';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  @Input() mail: Mail;
  isrec: boolean;

  constructor() { }

  ngOnInit() {
    this.isrec = true;
  }

}
