import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackboardScenComponent } from './blackboard-scen.component';

describe('BlackboardScenComponent', () => {
  let component: BlackboardScenComponent;
  let fixture: ComponentFixture<BlackboardScenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackboardScenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackboardScenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
