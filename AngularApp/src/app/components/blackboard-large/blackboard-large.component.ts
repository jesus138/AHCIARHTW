import { Component, OnInit, Input } from '@angular/core';
import { BlackboardLarge, BlackboardDetail } from 'src/app/model/blackboard';

@Component({
  selector: 'app-blackboard-large',
  templateUrl: './blackboard-large.component.html',
  styleUrls: ['./blackboard-large.component.scss']
})
export class BlackboardLargeComponent implements OnInit {
  private static readonly PSIZE: number = 5;

  @Input() blackboard: BlackboardLarge;

  pages: number;
  cpage: number;
  pinned: boolean;

  constructor() { 
    this.pinned = false;
  }

  ngOnInit() {
    this.pages = Math.ceil(this.blackboard.all.length/BlackboardLargeComponent.PSIZE);
    this.cpage = 1;
  }

  getPageNumbers(): number[] {
    let ps: number[] = [];
    for(let i=1; i<= this.pages; i++){
      ps.push(i);
    }
    return ps;
  }

  selectPage(page: number) {
    this.cpage = page;
  }

  setModePinned(pinned: boolean){
    this.pinned = pinned;
  }

  getItems(): BlackboardDetail[]{
    if(this.pinned){
      return this.blackboard.pinned;
    }
    let istart: number = (this.cpage-1)*BlackboardLargeComponent.PSIZE;
    let iend: number = istart + BlackboardLargeComponent.PSIZE;
    let items: BlackboardDetail[] = [];
    let len: number = this.blackboard.all.length;
    for(let i=istart; i<iend && i<len; i++){
      items.push(this.blackboard.all[i]);
    }
    return items;
  }

}
