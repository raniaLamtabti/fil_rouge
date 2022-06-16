import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentItemTestComponent } from './medicament-item-test.component';

describe('MedicamentItemTestComponent', () => {
  let component: MedicamentItemTestComponent;
  let fixture: ComponentFixture<MedicamentItemTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentItemTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentItemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
