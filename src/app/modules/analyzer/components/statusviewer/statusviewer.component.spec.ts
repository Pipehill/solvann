import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusviewerComponent } from './statusviewer.component';

describe('StatusviewerComponent', () => {
  let component: StatusviewerComponent;
  let fixture: ComponentFixture<StatusviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
