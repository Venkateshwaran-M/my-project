import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegusersComponent } from './regusers.component';

describe('RegusersComponent', () => {
  let component: RegusersComponent;
  let fixture: ComponentFixture<RegusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
