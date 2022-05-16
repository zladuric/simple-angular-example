import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";

export enum FunnyWord {
  Canoodle = 'Canoodle',
  Bumfuzzle = 'Bumfuzzle',
  Everywhen = 'Everywhen',
  Erf = 'Erf',
  Cattywampus = 'Cattywampus',
  DiddlySquat = 'diddly-squat',
  Doohickey = 'Doohickey',
  Gobbledegook = 'Gobbledegook',
}

@Component({
  selector: 'bram-funny-word-picker',
  templateUrl: './funny-word-picker.component.html',
  styleUrls: ['./funny-word-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FunnyWordPickerComponent),
      multi: true,
    },
  ],
})
export class FunnyWordPickerComponent implements ControlValueAccessor {
  isDisabled = false;
  values = Object.keys(FunnyWord)

  /**
   * The registered callback function called when a change event occurs on the input element.
   */
  private onChangeCallback!: (_: unknown) => void;
  /**
   * The registered callback function called when a blur event occurs on the input element.
   */
  private onTouchedCallback!: () => void;
  private formValue = FunnyWord.Canoodle;
  showCamera = false;
  showFunnyThing = false;

  onChangeValue(change: MatSelectChange) {
    this.formValue = change.value;
    this.showFunnyThing = false;
    this.showCamera = false;
    this.onChangeCallback(change.value);
    this.onTouchedCallback();
  }

  registerOnChange(fn: (_: unknown) => void): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(obj: FunnyWord): void {
    if (this.formValue !== obj) {
      this.formValue = obj;
    }
  }

  cameraInput() {
    this.showCamera = true;
    this.showFunnyThing = false;
  }

  onSelected() {
    console.log('thing');
    this.showFunnyThing = true;
    this.showCamera = false;
  }
}
