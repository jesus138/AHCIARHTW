import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackboardConfigComponent } from './blackboard-config.component';

describe('BlackboardConfigComponent', () => {
  let component: BlackboardConfigComponent;
  let fixture: ComponentFixture<BlackboardConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackboardConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackboardConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
