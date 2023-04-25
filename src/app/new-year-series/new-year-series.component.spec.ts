import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYearSeriesComponent } from './new-year-series.component';

describe('NewYearSeriesComponent', () => {
  let component: NewYearSeriesComponent;
  let fixture: ComponentFixture<NewYearSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewYearSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewYearSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
