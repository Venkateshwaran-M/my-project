import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemorequestComponent } from './demorequest.component';

describe('DemorequestComponent', () => {
  let component: DemorequestComponent;
  let fixture: ComponentFixture<DemorequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemorequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemorequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
