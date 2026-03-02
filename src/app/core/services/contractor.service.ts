import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../public/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class ContractorService {
    private http = inject(HttpClient);
    private apiUrl = environment.apiBaseUrl;

    getProjects(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/projects`);
    }

    createProject(projectData: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/projects`, projectData);
    }

    updateProject(projectId: string, projectData: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/projects/${projectId}`, projectData);
    }

    deleteProject(projectId: string): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/projects/${projectId}`);
    }

    getWorkers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/users/workers`);
    }

    createWorker(workerData: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/users/workers`, workerData);
    }

    updateWorker(workerData: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/users/workers`, workerData);
    }

    assignWorkerToProject(projectId: string, workerId: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/projects/${projectId}/assign-worker`, { workerId });
    }

    getDailyReports(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/reports/daily`);
    }

    getWeeklyReports(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/reports/weekly`);
    }

    getDashboardStats(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/reports/dashboard-stats`);
    }
}
