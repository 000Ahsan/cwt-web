import { WorkCategory } from './work-category.model';

export enum UserRole {
    CONTRACTOR = 'CONTRACTOR',
    WORKER = 'WORKER'
}

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    firstName?: string;
    lastName?: string;
    image?: string;
    categories?: WorkCategory[];
    workCategoryIds?: string[];
}

export interface AuthResponse {
    access_token: string;
    refresh_token: string;
    user: User;
}
