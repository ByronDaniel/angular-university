import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraFormComponent } from './calculadora-form.component';

describe('CalculadoraFormComponent', () => {
  let component: CalculadoraFormComponent;
  let fixture: ComponentFixture<CalculadoraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
