import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusIcon } from "@radix-ui/react-icons";
import { lazy, Suspense } from "react";

// dynamically importing guagechart
const GaugeChart = lazy(() => import("react-gauge-chart"));

export const DemographicMap = () => {
  return (
    <div className="flex flex-col h-full w-full gap-2">
      <Button
        className=" basis-0 bg-[#014E53] px-[16px] py-[12px] rounded-md text-[16px] font-[400] leading-[24px] text-white gap-2"
        size="lg"
      >
        <PlusIcon className="size-[18px] font-[400]" />
        Add New contributor
      </Button>
      <Card className="flex-grow flex-col p-2">
        <div className="w-full gap-[16px] p-2">
          <h1 className="w-full text-[18px] leading-[28px] font-[400] text-black">
            Role Demographics
          </h1>
        </div>
        <Suspense fallback={<div>Loading chart...</div>}>
          <GaugeChart
            id="gauge-chart1"
            nrOfLevels={20}
            percent={0.86}
            colors={["#FF5F6D", "#FFC371"]}
            arcWidth={0.3}
          />
        </Suspense>
      </Card>
    </div>
  );
};
