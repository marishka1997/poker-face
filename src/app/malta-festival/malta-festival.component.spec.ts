import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaltaFestivalComponent } from './malta-festival.component';

describe('MaltaFestivalComponent', () => {
  let component: MaltaFestivalComponent;
  let fixture: ComponentFixture<MaltaFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaltaFestivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaltaFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
