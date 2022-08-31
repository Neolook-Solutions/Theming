import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineNameComponent } from './define-name.component';

describe('DefineNameComponent', () => {
  let component: DefineNameComponent;
  let fixture: ComponentFixture<DefineNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefineNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
