export interface Project {
    id: string;
    name: string;
    description?: string;
    logo?: string;
    latitude?: number;
    longitude?: number;
    startDate?: string;
    endDate?: string;
    active: boolean;
    contractorId: string;
    createdAt: string;
    updatedAt: string;
    workers?: Worker[];
}
