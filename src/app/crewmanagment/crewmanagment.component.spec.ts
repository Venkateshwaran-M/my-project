import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewmanagmentComponent } from './crewmanagment.component';

describe('CrewmanagmentComponent', () => {
  let component: CrewmanagmentComponent;
  let fixture: ComponentFixture<CrewmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewmanagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
