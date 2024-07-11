import { Card } from "@/components/ui/card";
import { AttendeeHeatMap } from "./attendee-heat-map";
import { ContributorDropdown } from "./contributor-dropdown";
import { ContributorChart } from "@/components/charts/contributor-chart";
import { AttendanceOverview } from "./attendance-overview";

export const ContributorSummaryCard = () => {
  return (
    <div className="flex w-full gap-4">
      <Card className="w-full h-auto ">
        {/* TODO: on hold for the main time */}
        {/* <div className="border flex  gap-2 p-4">
          <div className="w-full h-[56px]  gap-[16px] flex justify-between">
            <h1 className="leading-[28px] text-[18px] font-[500px] ">
              Total Contributors
            </h1>
            <ContributorDropdown />
          </div>
        </div> */}
        {/* <AttendeeHeatMap /> */}
        <AttendanceOverview />
      </Card>
      <div className="w-auto">
        <ContributorChart />
      </div>
    </div>
  );
};
