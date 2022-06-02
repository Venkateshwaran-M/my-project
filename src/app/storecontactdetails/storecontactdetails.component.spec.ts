import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorecontactdetailsComponent } from './storecontactdetails.component';

describe('StorecontactdetailsComponent', () => {
  let component: StorecontactdetailsComponent;
  let fixture: ComponentFixture<StorecontactdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorecontactdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorecontactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
