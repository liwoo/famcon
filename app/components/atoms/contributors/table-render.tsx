import React from "react";
// import { getTasks } from "./_lib/queries"
// import { searchParamsSchema } from "./_lib/validations"
import { TasksTableProvider } from "./table/task-table-provider";
import { Skeleton } from "@/components/ui/skeleton";
import { DateRangePicker } from "@/components/blocks/date-range-picker";
import { DataTableSkeleton } from "./table/data-table-skeleton";
import { TasksTable } from "./table/task-table";
import { Shell } from "@/components/shell";
import { SearchParams } from "@/@types";
import { searchParamsSchema } from "@/lib/validations";
import { getTasks } from "@/lib/queries";

export interface IndexPageProps {
  searchParams: SearchParams;
}

export const TableRender = ({ searchParams }: IndexPageProps) => {
  const search = searchParamsSchema.parse(searchParams);
  const tasksPromise = getTasks(search);
  return (
    <Shell className="gap-2">
      {/**
       * The `TasksTableProvider` is use to enable some feature flags for the `TasksTable` component.
       * Feel free to remove this, as it's not required for the `TasksTable` component to work.
       */}
      <TasksTableProvider>
        {/**
         * The `DateRangePicker` component is used to render the date range picker UI.
         * It is used to filter the tasks based on the selected date range it was created at.
         * The business logic for filtering the tasks based on the selected date range is handled inside the component.
         */}
        <React.Suspense fallback={<Skeleton className="h-7 w-52" />}>
          <DateRangePicker
            triggerSize="sm"
            triggerClassName="ml-auto w-56 sm:w-60"
            align="end"
          />
        </React.Suspense>
        <React.Suspense
          fallback={
            <DataTableSkeleton
              columnCount={5}
              searchableColumnCount={1}
              filterableColumnCount={2}
              cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
              shrinkZero
            />
          }
        >
          {/**
           * Passing promises and consuming them using React.use for triggering the suspense fallback.
           * @see https://react.dev/reference/react/use
           */}
          <TasksTable tasksPromise={tasksPromise} />
        </React.Suspense>
      </TasksTableProvider>
    </Shell>
  );
};
