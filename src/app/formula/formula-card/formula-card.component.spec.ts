import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaCardComponent } from './formula-card.component';

describe('FormulaCardComponent', () => {
  let component: FormulaCardComponent;
  let fixture: ComponentFixture<FormulaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
