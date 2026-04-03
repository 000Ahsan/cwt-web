import { Routes } from '@angular/router';
import { ContractorDashboardComponent } from './dashboard/dashboard.component';
import { ContractorProjectsComponent } from './projects/projects.component';
import { ContractorWorkersComponent } from './workers/workers.component';
import { ContractorLogsComponent } from './logs/logs.component';
import { CategoriesComponent } from './categories/categories.component';
import { AttendanceComponent } from './attendance/attendance.component';

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
                path: 'logs',
                component: ContractorLogsComponent,
                data: { title: 'Work Logs', breadcrumb: 'Work Logs' }
            },
            {
                path: 'categories',
                component: CategoriesComponent,
                data: { title: 'Work Categories', breadcrumb: 'Categories' }
            },
            {
                path: 'attendance',
                component: AttendanceComponent,
                data: { title: 'Attendance', breadcrumb: 'Attendance' }
            },
            {
                path: 'user',
                loadChildren: () => import('../user/user.routes').then(m => m.USER_ROUTES)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
