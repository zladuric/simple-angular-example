import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'bram-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  form = this.fb.group({
    mandator: ['', Validators.required],
    multipleValidators: [5, [Validators.required, Validators.min(5)]],
    funnyWord: null,
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((val) => console.log('Value changes:', val));
    this.form.statusChanges.subscribe(status => console.log('Status changes:', status, this.form.errors));
  }

}
