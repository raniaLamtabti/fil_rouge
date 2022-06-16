import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPatientStatisticComponent } from './card-patient-statistic.component';

describe('CardPatientStatisticComponent', () => {
  let component: CardPatientStatisticComponent;
  let fixture: ComponentFixture<CardPatientStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPatientStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPatientStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
