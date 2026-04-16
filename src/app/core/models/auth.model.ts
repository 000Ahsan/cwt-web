import { WorkCategory } from './work-category.model';

export enum UserRole {
    CONTRACTOR = 'CONTRACTOR',
    WORKER = 'WORKER'
}

export enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    PKR = 'PKR',
    CAD = 'CAD'
}

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    firstName?: string;
    lastName?: string;
    image?: string;
    currency?: Currency;
    categories?: WorkCategory[];
    workCategoryIds?: string[];
}

export interface AuthResponse {
    access_token: string;
    refresh_token: string;
    user: User;
}
