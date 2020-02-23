import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxilaryComponent } from './auxilary.component';

describe('AuxilaryComponent', () => {
  let component: AuxilaryComponent;
  let fixture: ComponentFixture<AuxilaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxilaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxilaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
