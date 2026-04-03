import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../public/environments/environment';
import { WorkCategory, CreateWorkCategoryDto } from '../models/work-category.model';

@Injectable({
    providedIn: 'root'
})
export class WorkCategoryService {
    private apiUrl = `${environment.apiBaseUrl}/work-categories`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<WorkCategory[]> {
        return this.http.get<WorkCategory[]>(this.apiUrl);
    }

    getById(id: string): Observable<WorkCategory> {
        return this.http.get<WorkCategory>(`${this.apiUrl}/${id}`);
    }

    create(dto: CreateWorkCategoryDto): Observable<WorkCategory> {
        return this.http.post<WorkCategory>(this.apiUrl, dto);
    }

    update(id: string, dto: Partial<CreateWorkCategoryDto>): Observable<WorkCategory> {
        return this.http.patch<WorkCategory>(`${this.apiUrl}/${id}`, dto);
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
