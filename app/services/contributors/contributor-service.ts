import { ICrudService } from '@/@types';
import { TContributor, TPartialContributor } from '@/@types/contributors';

export class ContributorService implements ICrudService<TContributor> {
    async getAll(): Promise<TContributor[]> {
        // Implementation
        throw new Error('Method not implemented.');
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
