import MainLayout from "@/components/layouts/MainLayout";

import { Button } from "@/components/ui/button";

import { DemographicMap } from "@/components/atoms/role-demographics/demographic-map";
import { ContributorSummaryCard } from "@/components/atoms/contributors/contributor-summary-card";

import { Card } from "@/components/ui/card";
import { columns } from "@/components/contributions/columns";
import { Plus } from "lucide-react";

import { DataTable } from "@/components/contributions/data-table";
import { contributors } from "@/components/contributions/data";

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

          {/* <DataTableSkeleton columnCount={10} /> */}
          <DataTable columns={columns} data={contributors} />
        </Card>
      </div>
    </MainLayout>
  );
}
