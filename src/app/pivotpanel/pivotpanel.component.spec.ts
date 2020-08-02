import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotpanelComponent } from './pivotpanel.component';

describe('PivotpanelComponent', () => {
  let component: PivotpanelComponent;
  let fixture: ComponentFixture<PivotpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivotpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
