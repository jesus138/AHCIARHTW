import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Corridor2Component } from './corridor2.component';

describe('Corridor2Component', () => {
  let component: Corridor2Component;
  let fixture: ComponentFixture<Corridor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Corridor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Corridor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
