import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselperformanceComponent } from './vesselperformance.component';

describe('VesselperformanceComponent', () => {
  let component: VesselperformanceComponent;
  let fixture: ComponentFixture<VesselperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselperformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
