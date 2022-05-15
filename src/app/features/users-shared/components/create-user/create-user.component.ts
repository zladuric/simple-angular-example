import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserJSON } from '../../models/user';

@Component({
  selector: 'bram-create-post',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  @Output() addUser = new EventEmitter<Partial<UserJSON>>();
  userForm = this.fb.group({
    name: [null, Validators.required],
    username: [null, Validators.required],
    email: null,
    phone: null,
    website: null,
    address: this.fb.group({
      street: [null, Validators.required],
      suite: null,
      city: [null, Validators.required],
      zipcode: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      ],
    }),
    company: this.fb.group({
      name: [null, Validators.required],
      catchPhrase: null,
      bs: null,
    }),
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmit(): void {
    this.addUser.emit(this.userForm.getRawValue());
  }
}
