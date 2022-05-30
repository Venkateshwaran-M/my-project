import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipinventoryComponent } from './shipinventory.component';

describe('ShipinventoryComponent', () => {
  let component: ShipinventoryComponent;
  let fixture: ComponentFixture<ShipinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipinventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
