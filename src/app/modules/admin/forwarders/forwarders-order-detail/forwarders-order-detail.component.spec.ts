import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardersOrderDetailComponent } from './forwarders-order-detail.component';

describe('ForwardersOrderDetailComponent', () => {
  let component: ForwardersOrderDetailComponent;
  let fixture: ComponentFixture<ForwardersOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardersOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardersOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
