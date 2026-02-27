import { Routes } from '@angular/router';
import { ContractorDashboardComponent } from './dashboard/dashboard.component';
import { ContractorProjectsComponent } from './projects/projects.component';
import { ContractorWorkersComponent } from './workers/workers.component';
import { ContractorReportsComponent } from './reports/reports.component';

export const CONTRACTOR_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: ContractorDashboardComponent,
                data: { title: 'Dashboard', breadcrumb: 'Dashboard' }
            },
            {
                path: 'projects',
                component: ContractorProjectsComponent,
                data: { title: 'Projects', breadcrumb: 'Projects' }
            },
            {
                path: 'workers',
                component: ContractorWorkersComponent,
                data: { title: 'Workers', breadcrumb: 'Workers' }
            },
            {
                path: 'reports/daily',
                component: ContractorReportsComponent,
                data: { title: 'Reports', breadcrumb: 'Daily Report' }
            },
            {
                path: 'reports/weekly',
                component: ContractorReportsComponent,
                data: { title: 'Reports', breadcrumb: 'Weekly Report' }
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
