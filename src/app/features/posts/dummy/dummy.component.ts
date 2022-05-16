import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {filter} from "rxjs/operators";

@Component({
  selector: 'bram-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  form = this.fb.group({
    mandatory: ['', Validators.required],
    multipleValidators: [5, [Validators.required, Validators.min(5)]],
    funnyWord: [null, function (control: AbstractControl) {
      console.log(control.value);
      return null
    }],
  }, {
    validators: (c: AbstractControl) => {
      if (c.get('multipleValidators')?.value > c.get('mandatory')?.value) {
        return null;
      }
      return {
        somethingSomethingError: 'This is not a good value.'
      }
    }
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((val) => console.log('Value changes:', val));
    this.form.statusChanges
      .pipe(
        filter(status => status === 'INVALID')
      )
      .subscribe(status => console.log('Status changes:', status, this.form.errors));
  }

}
