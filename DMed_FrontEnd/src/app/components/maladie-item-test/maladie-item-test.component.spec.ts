import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladieItemTestComponent } from './maladie-item-test.component';

describe('MaladieItemTestComponent', () => {
  let component: MaladieItemTestComponent;
  let fixture: ComponentFixture<MaladieItemTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaladieItemTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaladieItemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
