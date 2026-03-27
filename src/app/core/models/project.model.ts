import { User } from './auth.model';

export interface ProjectWorker extends User {
    projectHours?: number;
}

export interface Project {
    id: string;
    name: string;
    description?: string;
    logo?: string;
    latitude?: number;
    longitude?: number;
    startDate?: string;
    endDate?: string;
    targetHours?: number;
    actualHours?: number;
    address?: string;
    active: boolean;
    isLocationBound: boolean;
    contractorId: string;
    categories?: string;
    createdAt: string;
    updatedAt: string;
    workers?: ProjectWorker[];
}
