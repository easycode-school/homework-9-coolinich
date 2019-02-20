import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeFormatDateComponent } from './pipe-format-date.component';

describe('PipeFormatDateComponent', () => {
  let component: PipeFormatDateComponent;
  let fixture: ComponentFixture<PipeFormatDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeFormatDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeFormatDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
