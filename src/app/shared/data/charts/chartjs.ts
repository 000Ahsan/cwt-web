import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

let primary_color = localStorage.getItem('primary_color') || '#24695c';
let secondary_color = localStorage.getItem('secondary_color') || '#ba895d';

// barChart
export const barChart = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  responsive: false,
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(43, 94, 94, 0.4)',
      borderColor: primary_color,
      borderWidth: 2,
      data: [35, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      borderColor: secondary_color,
      backgroundColor: 'rgba(192, 98, 64, 0.4)',
      borderWidth: 2,
      data: [28, 48, 40, 19, 86, 27, 90],
    },
  ],
  barOptions: [
    {
      scaleBeginAtZero: true,
      scaleShowGridLines: true,
      scaleGridLineColor: 'rgba(0,0,0,0.1)',
      scaleGridLineWidth: 1,
      scaleShowHorizontalLines: true,
      scaleShowVerticalLines: true,
      barShowStroke: true,
      barStrokeWidth: 2,
      barValueSpacing: 5,
      barDatasetSpacing: 1,
    },
  ],
};

// LineGraph Chart

export var lineGraphLabels: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];
export var lineGraphType: ChartType = 'line';
export var lineGraphLegend = false;
export var lineGraphData: ChartDataset<'line'>[] = [
  {
    label: 'My First dataset',
    fill: true,
    backgroundColor: 'rgba(43, 94, 94, 0.3)',
    borderColor: primary_color,
    pointBackgroundColor: primary_color,
    borderWidth: 2,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#000',
    data: [10, 59, 80, 81, 56, 55, 40],
  },
  {
    label: 'My Second dataset',
    fill: true,
    backgroundColor: 'rgba(192, 98, 64, 0.3)',
    borderColor: secondary_color,
    pointBackgroundColor: secondary_color,
    pointBorderColor: '#fff',
    borderWidth: 2,
    pointHoverBorderColor: '#000',
    pointHoverBackgroundColor: secondary_color,
    data: [28, 48, 40, 19, 86, 27, 90],
  },
];
export var lineGraphOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: 'rgba(0,0,0,.05)',
      },
    },
    y: {
      grid: {
        display: true,
        color: 'rgba(0,0,0,.05)',
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
      fill: true,
    },
    point: {
      radius: 4,
      borderWidth: 1,
      hitRadius: 20,
    },
  },
};

// RadarGraph Chart
export var radarGraphOptions: ChartOptions<'radar'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    r: {
      grid: {
        color: 'rgba(0,0,0,.2)',
        lineWidth: 1,
      },
      angleLines: {
        display: true,
        color: 'rgba(0,0,0,.2)',
        lineWidth: 1,
      },
      pointLabels: {
        font: {
          size: 12,
        },
      },
    },
  },
  elements: {
    line: {
      borderWidth: 2,
      fill: true,
    },
    point: {
      radius: 3,
      borderWidth: 1,
      hitRadius: 20,
    },
  },
};
export var radarGraphLabels: string[] = ['Ford', 'Chevy', 'Toyota', 'Honda', 'Mazda'];
export var radarGraphType: ChartType = 'radar';
export var radarGraphLegend = false;
export var radarGraphData: ChartDataset<'radar'>[] = [
  {
    label: 'My First dataset',
    //   fill: true,
    backgroundColor: 'rgba(43, 94, 94, 0.4)',
    borderColor: primary_color,
    pointBackgroundColor: primary_color,
    pointBorderColor: primary_color,
    pointHoverBackgroundColor: primary_color,
    pointHoverBorderColor: 'rgba(43, 94, 94, 0.4)',
    data: [12, 3, 5, 18, 7],
  },
];

//line chart
export var lineChartOptions: ChartOptions<'line'> = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },
  responsive: true,
};
export var lineChartLabels: string[] = ['', '10', '20', '30', '40', '50', '60', '70', '80'];
export var lineChartType: ChartType = 'line';
export var lineChartLegend = false;
export var lineChartData: ChartDataset<'line'>[] = [
  {
    backgroundColor: 'rgba(81, 187, 37, 0.2)',
    fill: true,
    borderColor: '#51bb25',
    pointBackgroundColor: '#51bb25',
    data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
    borderWidth: 2,
  },
  {
    backgroundColor: 'rgba(192, 98, 64, 0.2)',
    fill: true,
    borderColor: secondary_color,
    pointBackgroundColor: secondary_color,
    data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
    borderWidth: 2,
  },
  {
    backgroundColor: 'rgba(43, 94, 94, 0.2)',
    fill: true,
    borderColor: primary_color,
    pointBackgroundColor: primary_color,
    data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
    borderWidth: 2,
  },
];

// Doughnut

export var doughnutChartLegend = false;
export var doughnutChartLabels: string[] = ['Primary', 'Secondary', 'Success'];
export var doughnutChartData: ChartDataset<'doughnut'>[] = [
  {
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [primary_color, secondary_color, '#51bb25'],
  },
];
export var doughnutChartType: ChartType = 'doughnut';
export const doughnutChartOptions: ChartOptions<'doughnut'> = {
  animation: {
    duration: 0,
  },
  responsive: true,
  maintainAspectRatio: false,
};

// polar Chart

export var polarChartLabels: string[] = ['Yellow', 'Sky', 'Black', 'Grey', 'Dark Grey'];
export var polarChartType: ChartType = 'polarArea';
export var polarChartLegend = false;
export var polarChartOptions: ChartOptions<'polarArea'> = {
  responsive: true,
  scales: {
    r: {
      beginAtZero: true,
      grid: {
        circular: true,
      },
      angleLines: {
        display: true,
      },
      pointLabels: {
        display: true,
      },
    },
  },
  animation: {
    animateRotate: true,
    animateScale: false,
  },
  plugins: {
    legend: {
      display: polarChartLegend,
    },
  },
};
export var polarChartColors = [{ backgroundColor: [primary_color, secondary_color] }];
export const polarChartData: ChartDataset<'polarArea'>[] = [
  {
    label: 'Polar Data',
    data: [300, 50, 100, 40, 120],
    backgroundColor: [primary_color, '#f8d62b', '#51bb25', '#a927f9', secondary_color],
    borderColor: '#fff',
    borderWidth: 2,
  },
];
