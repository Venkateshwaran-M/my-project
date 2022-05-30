import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmanagementsystemComponent } from './shipmanagementsystem.component';

describe('ShipmanagementsystemComponent', () => {
  let component: ShipmanagementsystemComponent;
  let fixture: ComponentFixture<ShipmanagementsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmanagementsystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmanagementsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
