import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContractorService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000';

    getProjects(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/projects`);
    }

    createProject(projectData: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/projects`, projectData);
    }

    getWorkers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/workers`);
    }

    assignWorkerToProject(projectId: number, workerId: number): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/projects/${projectId}/assign-worker`, { workerId });
    }

    getDailyReports(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/reports/daily`);
    }

    getWeeklyReports(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/reports/weekly`);
    }
}
