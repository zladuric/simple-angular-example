import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'bram-another-control',
  templateUrl: './another-control.component.html',
  styleUrls: ['./another-control.component.scss']
})
export class AnotherControlComponent implements ControlValueAccessor {
  callback: any;


  registerOnChange(fn: any): void {
    this.callback = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    console.log('comes from outside');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event: Event) {
    this.callback('Whatever value')
  }
}
