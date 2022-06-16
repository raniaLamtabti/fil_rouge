import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseHeadComponent } from './analyse-head.component';

describe('AnalyseHeadComponent', () => {
  let component: AnalyseHeadComponent;
  let fixture: ComponentFixture<AnalyseHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
