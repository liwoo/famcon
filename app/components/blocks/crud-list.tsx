// /components/CrudList.tsx

import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { useNavigate, useParams, useLocation, Outlet } from '@remix-run/react';
import { ICrudService, Identifiable } from '@/@types';
import { DataTable } from './data-table';
import { ColumnDef } from '@tanstack/react-table';

interface CrudListProps<T extends Identifiable> {
    columns: ColumnDef<T, any>[];
    data: T[];
    baseRoute: string;
    title: string;
}

export function CrudList<
    TL extends Identifiable,
    TCU extends Identifiable,
    TM extends Identifiable,
    TS extends ICrudService<TL, TCU, TM>
>({ columns, data, baseRoute, title }: CrudListProps<TL>) {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const isSheetOpen =
        location.pathname.includes('/create') ||
        location.pathname.includes('/edit') ||
        location.pathname.includes('/view');

    const handleClose = () => {
        navigate(baseRoute);
    };

    const getSheetTitle = () => {
        if (location.pathname.includes('/create')) {
            return 'Create';
        } else if (location.pathname.includes('/edit')) {
            return 'Edit';
        } else if (location.pathname.includes('/view')) {
            return 'View';
        }

        return '';
    };

    return (
        <div>
            <DataTable columns={columns} data={data} />
            <Sheet open={isSheetOpen} onOpenChange={handleClose}>
                <SheetContent
                    className="m-4 rounded-md"
                    style={{ minWidth: '40%' }}
                >
                    <SheetHeader className="mb-8">
                        <SheetTitle>{`${getSheetTitle()} ${title}`}</SheetTitle>
                    </SheetHeader>
                    <Outlet />
                </SheetContent>
            </Sheet>
        </div>
    );
}
