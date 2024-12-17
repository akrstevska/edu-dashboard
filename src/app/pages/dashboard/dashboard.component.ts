import {Component, ElementRef, inject, viewChild} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {ChartComponent} from '../../components/chart/chart.component';
import {WidgetComponent} from '../../components/widget/widget.component';
import {Widget} from '../../../models/widget';
import {StudentsComponent} from './widgets/students/students.component';
import {DashboardService} from '../../services/dashboard.service';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {wrapGrid} from 'animate-css-grid';


@Component({
  selector: 'app-dashboard',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton, MatCardTitle, MatCardSubtitle,
    ChartComponent, WidgetComponent, MatCardContent, MatIcon, MatMenu, MatMenuItem, MatMenuTrigger
  ],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
store=inject(DashboardService)
  dashboard = viewChild.required<ElementRef>('dashboard');

  ngOnInit(): void {
    wrapGrid(this.dashboard().nativeElement, {duration: 300})
  }
}
