import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardersGetRequestsComponent } from './forwarders-get-requests.component';

describe('ForwardersGetRequestsComponent', () => {
  let component: ForwardersGetRequestsComponent;
  let fixture: ComponentFixture<ForwardersGetRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardersGetRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardersGetRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
