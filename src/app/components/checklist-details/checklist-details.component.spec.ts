import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistDetailsComponent } from './checklist-details.component';

describe('ChecklistDetailsComponent', () => {
  let component: ChecklistDetailsComponent;
  let fixture: ComponentFixture<ChecklistDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistDetailsComponent]
    });
    fixture = TestBed.createComponent(ChecklistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
