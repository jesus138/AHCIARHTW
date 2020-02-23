import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlightComponent } from './overlight.component';

describe('OverlightComponent', () => {
  let component: OverlightComponent;
  let fixture: ComponentFixture<OverlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
