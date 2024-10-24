import { ICrudService } from '@/@types';
import { Category, ListableCategory } from '@/@types/category';

export class CategoryService
    implements ICrudService<ListableCategory, Category, Category>
{
    async getAll(): Promise<ListableCategory[]> {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return [
            {
                id: '1',
                name: 'Category 1',
                description: 'Description 1',
                finishedDate: '2021-01-01',
            },
            {
                id: '2',
                name: 'Category 2',
                description: 'Description 2',
                finishedDate: '2021-01-02',
            },
        ];
    }

    async getById(id: string): Promise<Category> {
        // Implementation
        throw new Error('Method not implemented.');
    }

    async create(item: Omit<Category, 'id'>): Promise<Category> {
        // Implementation
        throw new Error('Method not implemented.');
    }

    async update(id: string, item: Partial<Category>): Promise<Category> {
        // Implementation
        throw new Error('Method not implemented.');
    }

    async delete(id: string): Promise<void> {
        // Implementation
        throw new Error('Method not implemented.');
    }
}
