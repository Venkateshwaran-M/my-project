import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipdocumentComponent } from './shipdocument.component';

describe('ShipdocumentComponent', () => {
  let component: ShipdocumentComponent;
  let fixture: ComponentFixture<ShipdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipdocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
