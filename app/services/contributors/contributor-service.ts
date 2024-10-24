import { ICrudService } from '@/@types';
import { TContributor, TPartialContributor } from '@/@types/contributors';
import { contributors } from '@/data/contributors/data';

export class ContributorService
    implements ICrudService<TPartialContributor, TContributor, TContributor>
{
    async getAll(): Promise<TPartialContributor[]> {
        // Implementation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return contributors;
    }

    async getById(id: string): Promise<TContributor> {
        // Implementation
        throw new Error('Method not implemented.');
    }

    async create(item: Omit<TContributor, 'id'>): Promise<TContributor> {
        // Implementation
        throw new Error('Method not implemented.');
    }

    async update(
        id: string,
        item: Partial<TContributor>
    ): Promise<TContributor> {
        // Implementation
        throw new Error('Method not implemented.');
    }

    async delete(id: string): Promise<void> {
        // Implementation
        throw new Error('Method not implemented.');
    }
}
