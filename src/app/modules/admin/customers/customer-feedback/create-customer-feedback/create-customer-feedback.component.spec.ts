import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerFeedbackComponent } from './create-customer-feedback.component';

describe('CreateCustomerFeedbackComponent', () => {
  let component: CreateCustomerFeedbackComponent;
  let fixture: ComponentFixture<CreateCustomerFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
