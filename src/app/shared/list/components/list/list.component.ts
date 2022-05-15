import { Component, Input } from '@angular/core';

@Component({
  selector: 'bram-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T> {
  @Input() items: T[] = [];
  @Input() fields: (keyof T)[] = [];
}
