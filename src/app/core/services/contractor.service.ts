import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../public/environments/environment';

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
        return this.http.patch<any>(`${this.apiUrl}/projects/${projectId}`, projectData);
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

    updateWorker(workerData: any, id: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/users/workers/${id}`, workerData);
    }

    deleteWorker(workerId: string): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/users/workers/${workerId}`);
    }

    assignWorkerToProject(projectId: string, workerId: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/projects/${projectId}/assign-worker`, { workerId });
    }

    getContractorLogs(filters: {
        workerId?: string;
        projectId?: string;
        startDate?: string;
        endDate?: string;
        page?: number;
        limit?: number;
    } = {}): Observable<any> {
        let params = new URLSearchParams();
        if (filters.workerId) params.set('workerId', filters.workerId);
        if (filters.projectId) params.set('projectId', filters.projectId);
        if (filters.startDate) params.set('startDate', filters.startDate);
        if (filters.endDate) params.set('endDate', filters.endDate);
        if (filters.page) params.set('page', String(filters.page));
        if (filters.limit) params.set('limit', String(filters.limit));
        const query = params.toString() ? `?${params.toString()}` : '';
        return this.http.get<any>(`${this.apiUrl}/work-logs/contractor${query}`);
    }

    getProjectsChart(startDate: string, endDate: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/reports/chart/projects?startDate=${startDate}&endDate=${endDate}`);
    }

    getWorkersChart(startDate: string, endDate: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/reports/chart/workers?startDate=${startDate}&endDate=${endDate}`);
    }

    getDashboardStats(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/reports/dashboard-stats`);
    }

    signOffWorkLog(logId: string, signOffData: { status: string; comment?: string }): Observable<any> {
        return this.http.patch<any>(`${this.apiUrl}/work-logs/${logId}/sign-off`, signOffData);
    }
}
