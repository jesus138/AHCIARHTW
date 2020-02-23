import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortPlanComponent } from './short-plan.component';

describe('ShortPlanComponent', () => {
  let component: ShortPlanComponent;
  let fixture: ComponentFixture<ShortPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
