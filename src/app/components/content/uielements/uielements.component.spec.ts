import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UielementsComponent } from './uielements.component';

describe('UielementsComponent', () => {
  let component: UielementsComponent;
  let fixture: ComponentFixture<UielementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UielementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UielementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
