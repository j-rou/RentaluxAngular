import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentValidationComponent } from './rent-validation.component';

describe('RentValidationComponent', () => {
  let component: RentValidationComponent;
  let fixture: ComponentFixture<RentValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
