import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPatientComponent } from './card-patient.component';

describe('CardPatientComponent', () => {
  let component: CardPatientComponent;
  let fixture: ComponentFixture<CardPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
