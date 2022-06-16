import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladieHeadComponent } from './maladie-head.component';

describe('MaladieHeadComponent', () => {
  let component: MaladieHeadComponent;
  let fixture: ComponentFixture<MaladieHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaladieHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaladieHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
