import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { RadialBarChartOptions } from '../../../../shared/interface/widgets/chart';
import { Activity } from '../activity/activity';
import { InvoiceOverview } from '../invoice-overview/invoice-overview';
import { OurTarget } from '../our-target/our-target';
import { TopDealer } from '../top-dealer/top-dealer';
import { TopSelling } from '../top-selling/top-selling';
import { TopSellingChart } from '../top-selling-chart/top-selling-chart';
import { YearlyGrowth } from '../yearly-growth/yearly-growth';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.html',
  styleUrls: ['./ecommerce.scss'],
  imports: [
    InvoiceOverview,
    TopDealer,
    TopSelling,
    NgApexchartsModule,
    TopSellingChart,
    OurTarget,
    Activity,
    YearlyGrowth,
  ],
})
export class Ecommerce {
  public Annual1: RadialBarChartOptions = {
    series: [60],
    chart: {
      height: 400,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '37%',
        },
        track: {
          strokeWidth: '90%',
          opacity: 1,
          margin: 7,
        },
        dataLabels: {
          value: {
            fontSize: '12px',
            show: true,
            offsetY: -10,
          },
        },
      },
    },
    labels: [''],
    colors: ['#ba895d'],
    stroke: {
      lineCap: 'round',
    },
  };

  public Annual2: RadialBarChartOptions = {
    series: [58],
    chart: {
      height: 400,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '37%',
        },
        track: {
          strokeWidth: '90%',
          opacity: 1,
          margin: 7,
        },
        dataLabels: {
          value: {
            fontSize: '12px',
            show: true,
            offsetY: -10,
          },
        },
      },
    },
    labels: [''],
    colors: ['#24695c'],
    stroke: {
      lineCap: 'round',
    },
  };
}
