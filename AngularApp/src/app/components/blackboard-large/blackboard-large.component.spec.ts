import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackboardLargeComponent } from './blackboard-large.component';

describe('BlackboardLargeComponent', () => {
  let component: BlackboardLargeComponent;
  let fixture: ComponentFixture<BlackboardLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackboardLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackboardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
