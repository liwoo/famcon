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

export interface ICrudService<
    TListable extends Identifiable,
    TCreateUpdate extends Identifiable,
    TModel extends Identifiable
> {
    getAll(): Promise<TListable[]>;
    getById(id: string): Promise<TModel>;
    create(item: Omit<TCreateUpdate, 'id'>): Promise<TModel>;
    update(id: string, item: Partial<TCreateUpdate>): Promise<TModel>;
    delete(id: string): Promise<void>;
}
