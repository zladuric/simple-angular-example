import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnyWordPickerComponent } from './funny-word-picker.component';

describe('FunnyWordPickerComponent', () => {
  let component: FunnyWordPickerComponent;
  let fixture: ComponentFixture<FunnyWordPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunnyWordPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnyWordPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
