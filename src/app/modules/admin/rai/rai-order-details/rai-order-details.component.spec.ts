import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiOrderDetailsComponent } from './rai-order-details.component';

describe('RaiOrderDetailsComponent', () => {
  let component: RaiOrderDetailsComponent;
  let fixture: ComponentFixture<RaiOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
