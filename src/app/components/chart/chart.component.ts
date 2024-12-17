import { ApexChart, ApexDataLabels, ApexLegend, ApexNonAxisChartSeries, NgApexchartsModule } from 'ng-apexcharts';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-chart',
  imports: [NgApexchartsModule],
  template: `
    <apx-chart
      [series]="series"
      [chart]="chartOptions"
      [labels]="labels"
      [dataLabels]="dataLabels"
      [legend]="legend"
    ></apx-chart>
  `
})
export class ChartComponent {
  series: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];

  labels = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];

  chartOptions: ApexChart = {
    type: 'donut',
    height: 300
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

  legend: ApexLegend = {
    position: 'right'
  };
}
