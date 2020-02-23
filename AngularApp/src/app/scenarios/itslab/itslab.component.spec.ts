import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItslabComponent } from './itslab.component';

describe('ItslabComponent', () => {
  let component: ItslabComponent;
  let fixture: ComponentFixture<ItslabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItslabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
