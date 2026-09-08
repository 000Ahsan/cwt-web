export interface WorkCategory {
    id: string;
    contractorId: string;
    name: string;
    hourlyRate: number;
    createdAt?: Date;
    updatedAt?: Date;
    _count?: {
        projectLinks: number;
        workerLinks: number;
    };
}

export interface CreateWorkCategoryDto {
    name: string;
    hourlyRate: number;
}
