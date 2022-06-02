import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookedstatusComponent } from './userbookedstatus.component';

describe('UserbookedstatusComponent', () => {
  let component: UserbookedstatusComponent;
  let fixture: ComponentFixture<UserbookedstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbookedstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbookedstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
