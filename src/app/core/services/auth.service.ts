import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse, User, UserRole } from '../models/auth.model';
import { environment } from '../../../../public/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    private router = inject(Router);
    private apiUrl = environment.apiBaseUrl + '/auth';

    private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
    public currentUser$ = this.currentUserSubject.asObservable();

    get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }

    private getUserFromStorage(): User | null {
        const userJson = localStorage.getItem('user');
        if (!userJson || userJson === 'undefined' || userJson === 'null') {
            localStorage.removeItem('user');
            return null;
        }
        try {
            return JSON.parse(userJson);
        } catch {
            localStorage.removeItem('user');
            return null;
        }
    }

    login(credentials: any): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
            tap(response => {
                if (!response?.user || !response?.access_token) {
                    throw new Error(response?.message || 'Invalid login response');
                }
                this.setSession(response);
            })
        );
    }

    private setSession(authResult: AuthResponse) {
        const user = authResult.user;
        if (!user) {
            return;
        }
        if (typeof user.name === 'string') {
            const parts = user.name.split(' ');
            user.firstName = parts[0] || '';
            user.lastName = parts.slice(1).join(' ') || '';
        }

        localStorage.setItem('access_token', authResult.access_token);
        localStorage.setItem('refresh_token', authResult.refresh_token);
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
        this.router.navigate(['/auth/login']);
    }

    refreshToken(): Observable<any> {
        const refresh_token = localStorage.getItem('refresh_token');
        return this.http.post<any>(`${this.apiUrl}/refresh`, { refresh_token }).pipe(
            tap(response => {
                if (response.access_token) {
                    localStorage.setItem('access_token', response.access_token);
                }
                if (response.refresh_token) {
                    localStorage.setItem('refresh_token', response.refresh_token);
                }
            })
        );
    }

    updateUserProfile(profileData: FormData): Observable<any> {
        return this.http.patch<any>(`${this.apiUrl}/profile`, profileData).pipe(
            tap(response => {
                this.updateCurrentUser(response);
            })
        );
    }

    updateCurrentUser(user: User) {
        if (user && user.name && typeof user.name === 'string') {
            const parts = user.name.split(' ');
            user.firstName = parts[0] || '';
            user.lastName = parts.slice(1).join(' ') || '';
        }
        const currentUser = { ...this.currentUserValue, ...user };
        localStorage.setItem('user', JSON.stringify(currentUser));
        this.currentUserSubject.next(currentUser);
    }

    isLoggedIn(): boolean {
        const token = localStorage.getItem('access_token');
        return !!token && token !== 'undefined' && token !== 'null';
    }

    hasRole(role: UserRole): boolean {
        return this.currentUserValue?.role === role;
    }
}
