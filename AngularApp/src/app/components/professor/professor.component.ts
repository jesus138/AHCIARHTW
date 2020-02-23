import { Component, OnInit, Input } from '@angular/core';
import { Professor } from 'src/app/model/room';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  @Input() prof: Professor;

  constructor() { }

  ngOnInit() {
  }

}
