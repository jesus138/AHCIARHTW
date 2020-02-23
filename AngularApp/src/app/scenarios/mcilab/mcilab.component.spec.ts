import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McilabComponent } from './mcilab.component';

describe('McilabComponent', () => {
  let component: McilabComponent;
  let fixture: ComponentFixture<McilabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McilabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McilabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
