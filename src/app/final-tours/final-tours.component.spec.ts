import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalToursComponent } from './final-tours.component';

describe('FinalToursComponent', () => {
  let component: FinalToursComponent;
  let fixture: ComponentFixture<FinalToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
