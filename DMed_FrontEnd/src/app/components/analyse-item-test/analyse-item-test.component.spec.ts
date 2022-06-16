import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseItemTestComponent } from './analyse-item-test.component';

describe('AnalyseItemTestComponent', () => {
  let component: AnalyseItemTestComponent;
  let fixture: ComponentFixture<AnalyseItemTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseItemTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseItemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
