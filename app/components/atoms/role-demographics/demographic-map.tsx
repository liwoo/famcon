import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusIcon } from "@radix-ui/react-icons";
import { lazy, Suspense } from "react";

// dynamically importing guagechart
const GaugeComponent = lazy(() => import("react-gauge-component"));

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
        <div className="w-full gap-[16px]">
          <h1 className="w-full text-[18px] leading-[28px] font-[400] text-black">
            Role Demographics
          </h1>
        </div>
        <div className=" overflow-hidden">
          <Suspense fallback={<div>Loading chart...</div>}>
            <GaugeComponent
              type="semicircle"
              arc={{
                cornerRadius: 0,
                padding: 0.03,
                subArcs: [
                  {
                    limit: 30,
                    color: "#1570EF",
                  },
                  {
                    limit: 45,
                    color: "#F58B19",
                  },
                  {
                    limit: 70,
                    color: "#D92D20",
                  },
                  {
                    limit: 90,
                    color: "#5BE12C",
                  },
                  {
                    limit: 100,
                    color: "#9333ea",
                  },
                ],
              }}
              value={75}
              pointer={{ type: "blob", animationDelay: 0 }}
              labels={{
                valueLabel: {
                  style: { fill: "#1F1F1F", border: "none" },
                },
              }}
            />
          </Suspense>
        </div>

        <div className="gap-2 grid grid-cols-3 p-2 mt-2">
          {rolesArray.map((role) => (
            <Roles role={role.role} color={role.color} />
          ))}
        </div>
      </Card>
    </div>
  );
};

const rolesArray = [
  { role: "Management", color: "blue" },
  { role: "IT & Security", color: "red" },
  { role: "Administration", color: "blue" },
  { role: "Human Resource", color: "orange" },
  { role: "Sales & Marketing", color: "green" },
  { role: "Other", color: "red" },
];

const Roles = ({ role, color }: { role: string; color: string }) => {
  return (
    <div className="flex gap-2 items-center text-ellipsis overflow-hidden ">
      <span className={`bg-${color}-600 rounded-full size-[6px]`} />
      <h1 className="text-sm font-light ">{role}</h1>
    </div>
  );
};
