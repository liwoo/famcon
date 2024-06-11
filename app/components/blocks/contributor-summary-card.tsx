import { ContributorDropdown } from "../atoms/contributors/contributor-dropdown";
import { AttendeeHeatMap } from "../atoms/contributors/attendee-heat-map";

export const ContributorSummaryCard = () => {
  return (
    <div className="w-[650px] border h-[376px] p-4">
      <div className="w-full h-[56px] gap-[16px]  flex justify-between">
        <h1 className="leading-[28px] text-[18px] font-[500px] ">
          Total Contributors
        </h1>
        <ContributorDropdown />
      </div>
      {/* Attendance heat map */}
      <AttendeeHeatMap />
    </div>
  );
};
