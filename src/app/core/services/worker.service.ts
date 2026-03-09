import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../public/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WorkerService {
    private http = inject(HttpClient);
    private apiUrl = environment.apiBaseUrl;

    getAssignedProjects(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/projects`);
    }

    startSession(projectId: number): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/sessions/start`, { projectId });
    }

    endSession(sessionId: number): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/sessions/end`, { sessionId });
    }

    submitWorkLog(logData: FormData): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/work-logs`, logData);
    }

    getWorkerLogs(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/work-logs/worker`);
    }

    discardActiveSession(): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/sessions/discard`);
    }
}
