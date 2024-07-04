import MainLayout from "@/components/layouts/MainLayout";
import * as React from "react";
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
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  CircleDollarSignIcon,
  MoreHorizontal,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { DemographicMap } from "@/components/atoms/role-demographics/demographic-map";
import { ContributorSummaryCard } from "@/components/atoms/contributors/contributor-summary-card";
import { columns } from "@/components/contributions/columns";
import { DataTable } from "@/components/contributions/data-table";
import { contributors } from "@/components/contributions/data";
import { AddContributor } from "@/components/atoms/contributors/Create-Contributors/components/new-user";

export default function Contributors() {
  return (
    <MainLayout title="Contributors" action={<AddContributor />}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 w-full">
          <ContributorSummaryCard />
        </div>
        <Card className="p-4">
          {/* table goes here */}
          {/* <TableRender searchParams={searchParams} /> */}
          <DataTable columns={columns} data={contributors} />
        </Card>
      </div>
    </MainLayout>
  );
}
