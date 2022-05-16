import { Component } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import { routes } from '../../routes';

@Component({
  selector: 'bram-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent {
  navLinks: NavItem[];

  constructor() {
    this.navLinks = routes
      .filter((route) => route.data)
      .map((route) => {
        return {
          label: route.data ? route.data['label'] || '' : '',
          path: route.path || '',
        };
      });
  }
}
