export interface Category {
    id: string;
    title: string;
    description: string;
    minimumIndivudualContribution: number;
    createAt: Date;
    deletedAt: Date;
    createdBy: string;
    isPublished: boolean;
    endDate: Date;
}

export interface ListableCategory {
    id: string;
    name: string;
    description: string;
    finishedDate: string;
}
