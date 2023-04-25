import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsScoresComponent } from './tournaments-scores.component';

describe('TournamentsScoresComponent', () => {
  let component: TournamentsScoresComponent;
  let fixture: ComponentFixture<TournamentsScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentsScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
