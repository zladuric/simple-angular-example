import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherControlComponent } from './another-control.component';

describe('AnotherControlComponent', () => {
  let component: AnotherControlComponent;
  let fixture: ComponentFixture<AnotherControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
