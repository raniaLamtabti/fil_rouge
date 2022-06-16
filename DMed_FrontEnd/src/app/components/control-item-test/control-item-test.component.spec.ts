import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlItemTestComponent } from './control-item-test.component';

describe('ControlItemTestComponent', () => {
  let component: ControlItemTestComponent;
  let fixture: ComponentFixture<ControlItemTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlItemTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlItemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
