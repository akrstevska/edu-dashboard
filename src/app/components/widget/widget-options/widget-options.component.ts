import { Component, inject, input, model } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { Widget } from '../../../../models/widget';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-widget-options',
  imports: [MatIconButton, MatIcon, MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.css',
})
export class WidgetOptionsComponent {
  data = input.required<Widget>();
  showOptions = model<boolean>(false);

  store = inject(DashboardService);
}
