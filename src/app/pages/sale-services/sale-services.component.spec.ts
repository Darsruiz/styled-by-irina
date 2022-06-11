import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleServicesComponent } from './sale-services.component';

describe('SaleServicesComponent', () => {
  let component: SaleServicesComponent;
  let fixture: ComponentFixture<SaleServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
