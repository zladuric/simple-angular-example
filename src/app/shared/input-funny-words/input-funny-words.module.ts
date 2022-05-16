import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunnyWordPickerComponent } from './funny-word-picker/funny-word-picker.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { WebcamSnapComponent } from './webcam-snap/webcam-snap.component';
import {MatButtonModule} from "@angular/material/button";

;



@NgModule({
  declarations: [
    FunnyWordPickerComponent,
    WebcamSnapComponent
  ],
  exports: [FunnyWordPickerComponent],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class InputFunnyWordsModule { }
