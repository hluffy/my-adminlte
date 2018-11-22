import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacepageComponent } from './pacepage.component';

describe('PacepageComponent', () => {
  let component: PacepageComponent;
  let fixture: ComponentFixture<PacepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
