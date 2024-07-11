import { Card } from "@/components/ui/card";
import { Folder } from "lucide-react";
import { ContributorDropdown } from "./contributor-dropdown";

export const AttendanceOverview = () => {
  return (
    <Card className="w-full rounded-sm h-auto p-2">
      <div className="flex gap-2 justify-between items-center w-full">
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
    </Card>
  );
};
