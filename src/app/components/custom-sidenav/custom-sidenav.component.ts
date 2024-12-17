import {Component, computed, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val:boolean) {
    this.sideNavCollapsed.set(val);
  }
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',

    },
    {
      icon: 'peopleAlt',
      label: 'Students',
      route: 'students',

    },
    {
      icon: 'article',
      label: 'Courses',
      route: 'courses',
    },
  ]);

  logoSize = computed(() => this.sideNavCollapsed()? '50':'100');

}
