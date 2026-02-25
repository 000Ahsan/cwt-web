import { Component } from '@angular/core';

import { ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.html',
  styleUrls: ['./chartjs.scss'],
  imports: [BaseChartDirective],
})
export class Chartjs {
  // barChart
  public barChart = chartData.barChart;

  // lineGraph Chart
  public lineGraphOptions = chartData.lineGraphOptions;
  public lineGraphLabels = chartData.lineGraphLabels;
  public lineGraphType = chartData.lineGraphType;
  public lineGraphLegend = chartData.lineGraphLegend;
  public lineGraphData = chartData.lineGraphData;

  // radarGraph Chart
  public radarGraphOptions = chartData.radarGraphOptions;
  public radarGraphLabels = chartData.radarGraphLabels;
  public radarGraphType = chartData.radarGraphType;
  public radarGraphData = chartData.radarGraphData;

  // lineChart
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;

  // Doughnut
  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartOptions = chartData.doughnutChartOptions;
  public doughnutChartLegend = chartData.doughnutChartLegend;

  // polarareaChart
  public polarareaChartLabels = chartData.doughnutChartLabels;
  public polarareaChartData = chartData.doughnutChartData;
  public polarareaChartType = chartData.doughnutChartType;
  public polarareaChartOptions = chartData.doughnutChartOptions;
  public polarareaChartLegend = chartData.lineChartLegend;

  // polarChart
  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartColors = chartData.polarChartColors;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;

  public polarAreaChartLabels: String[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales',
  ];
  public polarAreaChartData: String[] = ['300', '500', '100', '40', '120'];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
}
