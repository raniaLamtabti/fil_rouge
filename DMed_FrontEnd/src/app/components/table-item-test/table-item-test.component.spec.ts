import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemTestComponent } from './table-item-test.component';

describe('TableItemTestComponent', () => {
  let component: TableItemTestComponent;
  let fixture: ComponentFixture<TableItemTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItemTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableItemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
