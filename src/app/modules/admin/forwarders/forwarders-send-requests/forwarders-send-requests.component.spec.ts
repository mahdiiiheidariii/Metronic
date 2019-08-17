import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardersSendRequestsComponent } from './forwarders-send-requests.component';

describe('ForwardersSendRequestsComponent', () => {
  let component: ForwardersSendRequestsComponent;
  let fixture: ComponentFixture<ForwardersSendRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardersSendRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardersSendRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
