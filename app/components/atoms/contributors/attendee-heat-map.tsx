import { ContributorsDetails } from "./detail";
import { ProgressBarPrototype } from "./progress-bar";

export const AttendeeHeatMap = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex w-full gap-2 items-end">
        <h1 className="font-[500] text-[48px] leading-[48px] ">1.894</h1>
        <p className="font-light text-[16px] leading-[24px]">Contributors</p>
      </div>
      <ProgressBarPrototype />
      <div className="w-full">
        <div className="w-full py-4 gap-4 flex border-[#F5F5F5] ">
          <ContributorsDetails />
        </div>
      </div>
    </div>
  );
};
