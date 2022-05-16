import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyComponent } from './dummy/dummy.component';
import { RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {InputFunnyWordsModule} from "../../shared/input-funny-words/input-funny-words.module";

@NgModule({
  declarations: [
    DummyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DummyComponent
      },
    ]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InputFunnyWordsModule
  ],
})
export class PostsModule {}
