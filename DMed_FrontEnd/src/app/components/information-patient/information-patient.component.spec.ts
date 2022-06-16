import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPatientComponent } from './information-patient.component';

describe('InformationPatientComponent', () => {
  let component: InformationPatientComponent;
  let fixture: ComponentFixture<InformationPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
