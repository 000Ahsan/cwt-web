import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WorkerService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000';

    getAssignedProjects(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/assigned-projects`);
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

    getWorkHistory(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/my/work-history`);
    }
}
