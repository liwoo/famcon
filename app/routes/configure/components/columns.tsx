import { ListableCategory } from '@/@types/category';
import { ColumnDef } from '@tanstack/react-table';

export const categoryColumns: ColumnDef<ListableCategory>[] = [
    {
        accessorKey: 'id',
        header: 'Id',
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'description',
        header: 'Description',
    },
    {
        accessorKey: 'finishedDate',
        header: 'Finished Date',
    },
];
