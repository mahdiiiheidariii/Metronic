import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPortableMonitorComponent } from './customer-portable-monitor.component';

describe('CustomerPortableMonitorComponent', () => {
  let component: CustomerPortableMonitorComponent;
  let fixture: ComponentFixture<CustomerPortableMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPortableMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPortableMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
