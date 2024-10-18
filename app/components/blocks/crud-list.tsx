// /components/CrudList.tsx

import React from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useNavigate, useParams, useLocation, Outlet } from '@remix-run/react';
import { ICrudService, Identifiable } from '@/@types';
import { DataTable } from './data-table';
import { ColumnDef } from '@tanstack/react-table';

interface CrudListProps<T extends Identifiable> {
    columns: ColumnDef<T, any>[];
    data: T[];
    baseRoute: string;
}

export function CrudList<
    T extends Identifiable,
    TM extends Identifiable,
    TS extends ICrudService<TM>
>({ columns, data, baseRoute }: CrudListProps<T>) {
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

    return (
        <div>
            <DataTable columns={columns} data={data} />
            <Sheet open={isSheetOpen} onOpenChange={handleClose}>
                <SheetContent className="m-4 rounded-md">
                    <Outlet />
                </SheetContent>
            </Sheet>
        </div>
    );
}
