import { Routes } from '@angular/router';
import { WorkerProjectsComponent } from './projects/projects.component';
import { WorkerSessionComponent } from './session/session.component';
import { WorkerHistoryComponent } from './history/history.component';

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
                path: 'session',
                component: WorkerSessionComponent,
                data: { title: 'Work Session', breadcrumb: 'Session' }
            },
            {
                path: 'history',
                component: WorkerHistoryComponent,
                data: { title: 'Work History', breadcrumb: 'History' }
            },
            {
                path: '',
                redirectTo: 'projects',
                pathMatch: 'full'
            }
        ]
    }
];
