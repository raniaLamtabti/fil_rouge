import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladieItemComponent } from './maladie-item.component';

describe('MaladieItemComponent', () => {
  let component: MaladieItemComponent;
  let fixture: ComponentFixture<MaladieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaladieItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaladieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
