import { LucideIcon } from 'lucide-react';

export interface Identifiable {
    id: string;
}

interface NavItemProps {
    label: string;
    icon: LucideIcon;
    href: string;
    children?: NavItemProps[];
}

export interface ICrudService<T extends Identifiable> {
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T>;
    create(item: Omit<T, 'id'>): Promise<T>;
    update(id: string, item: Partial<T>): Promise<T>;
    delete(id: string): Promise<void>;
}
