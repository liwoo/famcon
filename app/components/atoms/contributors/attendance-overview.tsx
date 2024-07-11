import { Card } from "@/components/ui/card";
import { Folder } from "lucide-react";
import { ContributorDropdown } from "./contributor-dropdown";
import { AttendanceSummaryCard } from "./attendance-summary-card";

// chart imports

import { NewChart } from "./attendance-chart";

export const AttendanceOverview = () => {
  return (
    <Card className="w-full rounded-sm h-full py-4 px-3 flex flex-col  gap-8">
      <div className="flex gap-2 border-none shadow-none justify-between items-center w-full">
        <div className="flex gap-2 items-center ">
          <span className="bg-teal-700/20 p-2 rounded-lg ">
            <Folder className="text-teal-900 size-6" />
          </span>
          <span className="flex flex-col leading-2">
            <h1 className="text-sm text-teal-900">TOTAL</h1>
            <p className="text-sm">Fundrasing</p>
          </span>
        </div>
        <ContributorDropdown />
      </div>
      {/* TEMPORARY - glen */}
      {/* <div className="flex  items-center justify-center gap-6">
        <AttendanceSummaryCard title="On Going" mainValue="340" />
        <AttendanceSummaryCard title="On Going" mainValue="340" />
        <AttendanceSummaryCard title="On Going" mainValue="340" />
      </div> */}

      {/* chart grandient */}
      <div>
        <NewChart />
      </div>
    </Card>
  );
};
