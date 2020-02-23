import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprofComponent } from './proprof.component';

describe('ProprofComponent', () => {
  let component: ProprofComponent;
  let fixture: ComponentFixture<ProprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
