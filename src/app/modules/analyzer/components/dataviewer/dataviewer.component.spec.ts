import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewerComponent } from './dataviewer.component';

describe('DataviewerComponent', () => {
  let component: DataviewerComponent;
  let fixture: ComponentFixture<DataviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
