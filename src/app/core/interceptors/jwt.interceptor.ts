import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

let isRefreshing = false;
let refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const token = localStorage.getItem('access_token');
    const authService = inject(AuthService);

    let authReq = req;
    if (token && token !== 'undefined' && token !== 'null') {
        authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
    }

    return next(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401 && !req.url.includes('/auth/login') && !req.url.includes('/auth/refresh')) {
                if (!isRefreshing) {
                    isRefreshing = true;
                    refreshTokenSubject.next(null);

                    const refreshToken = localStorage.getItem('refresh_token');
                    if (refreshToken) {
                        return authService.refreshToken().pipe(
                            switchMap((response: any) => {
                                isRefreshing = false;
                                refreshTokenSubject.next(response.access_token);
                                return next(req.clone({
                                    headers: req.headers.set('Authorization', `Bearer ${response.access_token}`)
                                }));
                            }),
                            catchError((err) => {
                                isRefreshing = false;
                                authService.logout();
                                return throwError(() => err);
                            })
                        );
                    } else {
                        isRefreshing = false;
                        authService.logout();
                        return throwError(() => error);
                    }
                } else {
                    return refreshTokenSubject.pipe(
                        filter(token => token != null),
                        take(1),
                        switchMap(jwt => {
                            return next(req.clone({
                                headers: req.headers.set('Authorization', `Bearer ${jwt}`)
                            }));
                        })
                    );
                }
            }
            return throwError(() => error);
        })
    );
};
