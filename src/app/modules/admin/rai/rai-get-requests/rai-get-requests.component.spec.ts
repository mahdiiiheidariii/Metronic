import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiGetRequestsComponent } from './rai-get-requests.component';

describe('RaiGetRequestsComponent', () => {
  let component: RaiGetRequestsComponent;
  let fixture: ComponentFixture<RaiGetRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiGetRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiGetRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
