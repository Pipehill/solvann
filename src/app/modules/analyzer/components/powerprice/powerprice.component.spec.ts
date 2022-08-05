import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerpriceComponent } from './powerprice.component';

describe('PowerpriceComponent', () => {
  let component: PowerpriceComponent;
  let fixture: ComponentFixture<PowerpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerpriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
