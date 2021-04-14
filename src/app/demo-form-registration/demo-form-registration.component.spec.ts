import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormRegistrationComponent } from './demo-form-registration.component';

describe('DemoFormRegistrationComponent', () => {
  let component: DemoFormRegistrationComponent;
  let fixture: ComponentFixture<DemoFormRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
