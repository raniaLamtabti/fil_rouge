import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationDoctorComponent } from './information-doctor.component';

describe('InformationDoctorComponent', () => {
  let component: InformationDoctorComponent;
  let fixture: ComponentFixture<InformationDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
