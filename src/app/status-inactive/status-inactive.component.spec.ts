import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusInactiveComponent } from './status-inactive.component';

describe('StatusInactiveComponent', () => {
  let component: StatusInactiveComponent;
  let fixture: ComponentFixture<StatusInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusInactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
