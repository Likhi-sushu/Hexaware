import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmedicationComponent } from './pmedication.component';

describe('PmedicationComponent', () => {
  let component: PmedicationComponent;
  let fixture: ComponentFixture<PmedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmedicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
