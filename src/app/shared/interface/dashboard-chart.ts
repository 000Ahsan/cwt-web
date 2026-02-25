import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexStroke,
  ApexDataLabels,
  ApexFill,
  ApexXAxis,
  ApexYAxis,
  ApexResponsive,
  ApexMarkers,
  ApexTooltip,
  ApexAnnotations,
  ApexGrid,
  ApexLegend,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';

export interface BarChartOptions {
  series: ApexAxisChartSeries;
  colors: string[];
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
}

export interface TransactionChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  colors: string[];
  responsive: ApexResponsive[];
  fill?: ApexFill;
  markers?: ApexMarkers;
}

export interface SalesChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  annotations: ApexAnnotations;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
  tooltip: ApexTooltip;
  fill?: ApexFill;
  responsive: ApexResponsive[];
  colors: string[];
}

export interface InvoiceChartOptions {
  chart: ApexChart & {
    dropShadow?: {
      enabled?: boolean;
      enabledSeries?: number[];
      top?: number;
      left?: number;
      blur?: number;
      opacity?: number;
    };
  };
  series: { name: string; data: [number, number][] }[];
  colors: string[];
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  grid: ApexGrid;
  legend: ApexLegend;
  fill: ApexFill;
  responsive: ApexResponsive[];
}

export interface TopSalesChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  fill: ApexFill;
  labels: string[];
  markers: ApexMarkers;
  responsive: ApexResponsive[];
  yaxis: ApexYAxis | ApexYAxis[];
  tooltip: ApexTooltip;
  legend: {
    show: boolean;
  };
  colors: string[];
}

export interface ActivityChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
}

export interface YearlyChartData {
  x: string;
  y: number;
  fillColor?: string;
}

export interface YearlyChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  stroke: {
    show: boolean;
  };
  dataLabels: ApexDataLabels;
  fill: {
    opacity: number;
  };
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  responsive: ApexResponsive[];
  colors: string[];
}

export interface GrowthChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  labels: string[];
  legend: ApexLegend;
  stroke: ApexStroke;
  responsive: ApexResponsive[];
}
