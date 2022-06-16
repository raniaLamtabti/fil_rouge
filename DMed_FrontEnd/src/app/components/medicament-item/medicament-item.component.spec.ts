import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentItemComponent } from './medicament-item.component';

describe('MedicamentItemComponent', () => {
  let component: MedicamentItemComponent;
  let fixture: ComponentFixture<MedicamentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
