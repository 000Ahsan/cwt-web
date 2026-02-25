import { Component } from '@angular/core';

import { BasicTable } from './basic-table/basic-table';
import { Breckpoint } from './breckpoint/breckpoint';
import { Caption } from './caption/caption';
import { CommonBorderTable } from './common-border-table/common-border-table';
import { CommonSizingTable } from './common-sizing-table/common-sizing-table';
import { CustomWithHover } from './custom-with-hover/custom-with-hover';
import { HeadOptions } from './head-options/head-options';
import { HoverableRows } from './hoverable-rows/hoverable-rows';
import { InversePrimaryBg } from './inverse-primary-bg/inverse-primary-bg';
import { InverseTable } from './inverse-table/inverse-table';
import { ResponsiveTables } from './responsive-tables/responsive-tables';
import { StripedRowInverse } from './striped-row-inverse/striped-row-inverse';
import * as borderData from '../../../shared/data/table/border-tables';
import * as tableData from '../../../shared/data/table/sizing-tables';
import * as data from '../../../shared/data/table/tableData';

@Component({
  selector: 'app-bootstrap-tables',
  templateUrl: './bootstrap-tables.html',
  styleUrls: ['./bootstrap-tables.scss'],
  imports: [
    BasicTable,
    InverseTable,
    HoverableRows,
    InversePrimaryBg,
    Caption,
    HeadOptions,
    StripedRowInverse,
    Breckpoint,
    ResponsiveTables,
    CommonSizingTable,
    CustomWithHover,
    CommonBorderTable,
  ],
})
export class BootstrapTables {
  public contextual = data.contextual;
  public textOrBgUtilities = data.textOrBgUtilities;
  public table2 = data.table2;
  public table = data.table;
  public tablesXl = tableData.sizingTablesXl;
  public borderTableHorizontal = borderData.borderTableHorizontal;
}
