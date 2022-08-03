import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundBlursComponent } from './background-blurs.component';

describe('BackgroundBlursComponent', () => {
  let component: BackgroundBlursComponent;
  let fixture: ComponentFixture<BackgroundBlursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundBlursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundBlursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
