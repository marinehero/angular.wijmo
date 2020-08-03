import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglesheetComponent } from './googlesheet.component';

describe('GooglesheetComponent', () => {
  let component: GooglesheetComponent;
  let fixture: ComponentFixture<GooglesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
