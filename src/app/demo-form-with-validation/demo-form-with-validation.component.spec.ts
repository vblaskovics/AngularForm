import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithValidationComponent } from './demo-form-with-validation.component';

describe('DemoFormWithValidationComponent', () => {
  let component: DemoFormWithValidationComponent;
  let fixture: ComponentFixture<DemoFormWithValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormWithValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
