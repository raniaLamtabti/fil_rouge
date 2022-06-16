import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentHeadComponent } from './medicament-head.component';

describe('MedicamentHeadComponent', () => {
  let component: MedicamentHeadComponent;
  let fixture: ComponentFixture<MedicamentHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
