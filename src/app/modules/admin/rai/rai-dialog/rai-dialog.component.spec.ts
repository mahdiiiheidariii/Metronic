import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiDialogComponent } from './rai-dialog.component';

describe('RaiDialogComponent', () => {
  let component: RaiDialogComponent;
  let fixture: ComponentFixture<RaiDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
