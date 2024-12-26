import { Component, input, signal } from '@angular/core';
import { Widget } from '../../../models/widget';
import { NgComponentOutlet } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { WidgetOptionsComponent } from './widget-options/widget-options.component';

@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet, MatIconButton, MatIcon, WidgetOptionsComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  host: {
    '[style.grid-area]':
      '"span " + (data().rows ?? 1) + "/ span " + (data().columns ?? 1)',
  },
})
export class WidgetComponent {
  data = input.required<Widget>();

  showOptions = signal(false);
}
