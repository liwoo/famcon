import MainLayout from '@/components/layouts/MainLayout';
import * as React from 'react';
import {
    type ColumnDef,
    type ColumnFiltersState,
    type SortingState,
    type VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { SearchParams } from '@/@types';
import {
    ArrowUpDown,
    ChevronDown,
    CircleDollarSignIcon,
    MoreHorizontal,
    Plus,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { DemographicMap } from '@/components/atoms/role-demographics/demographic-map';
import { ContributorSummaryCard } from '@/components/atoms/contributors/contributor-summary-card';
import {
    IndexPageProps,
    TableRender,
} from '@/components/atoms/contributors/table-render';
import { DataTableSkeleton } from '@/components/atoms/contributors/table/data-table-skeleton';

const searchParams: IndexPageProps['searchParams'] = {
    // Add your search parameters here
    page: '1',
    per_page: '10',
    sort: 'createdAt.desc',
    title: 'Example Task',
    status: 'todo',
    priority: 'low',
    operator: 'and',
    from: '2023-01-01',
    to: '2023-12-31',
};
export default function Contributors() {
    return (
        <MainLayout
            title="Contributors"
            action={
                <Button className="bg-teal-900">
                    <Plus /> Add Contributor
                </Button>
            }
        >
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 w-full">
                    <ContributorSummaryCard />
                </div>
                <Card className="p-4">
                    {/* table goes here */}
                    {/* <TableRender searchParams={searchParams} /> */}
                    <DataTableSkeleton columnCount={10} />
                </Card>
            </div>
        </MainLayout>
    );
}

const data: Payment[] = [
    {
        id: 'm5gr84i9',
        amount: 316,
        status: 'success',
        email: 'ken99@yahoo.com',
    },
    {
        id: '3u1reuv4',
        amount: 242,
        status: 'success',
        email: 'Abe45@gmail.com',
    },
    {
        id: 'derv1ws0',
        amount: 837,
        status: 'processing',
        email: 'Monserrat44@gmail.com',
    },
    {
        id: '5kma53ae',
        amount: 874,
        status: 'success',
        email: 'Silas22@gmail.com',
    },
    {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
    },
];

export type Payment = {
    id: string;
    amount: number;
    status: 'pending' | 'processing' | 'success' | 'failed';
    email: string;
};

export const columns: ColumnDef<Payment>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue('status')}</div>
        ),
    },
    {
        accessorKey: 'email',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue('email')}</div>
        ),
    },
    {
        accessorKey: 'amount',
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue('amount'));

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(payment.id)
                            }
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
