import { Routes } from '@angular/router';
import { WorkerProjectsComponent } from './projects/projects.component';
import { WorkerLogsComponent } from './logs/logs.component';

export const WORKER_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'projects',
                component: WorkerProjectsComponent,
                data: { title: 'Projects', breadcrumb: 'Projects' }
            },
            {
                path: 'logs',
                component: WorkerLogsComponent,
                data: { title: 'Work Logs', breadcrumb: 'Work Logs' }
            },
            {
                path: 'user',
                loadChildren: () => import('../user/user.routes').then(m => m.USER_ROUTES)
            },
            {
                path: '',
                redirectTo: 'projects',
                pathMatch: 'full'
            }
        ]
    }
];
