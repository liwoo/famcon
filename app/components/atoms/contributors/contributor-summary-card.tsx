import { Card } from '@/components/ui/card';
import { AttendeeHeatMap } from './attendee-heat-map';
import { ContributorDropdown } from './contributor-dropdown';

export const ContributorSummaryCard = () => {
    return (
        <Card className="shadow-none w-full">
            <div className="border p-4 rounded-md">
                <div className="w-full h-[56px] gap-[16px]  flex justify-between">
                    <h1 className="leading-[28px] text-[18px] font-[500px] ">
                        Total Contributors
                    </h1>
                    <ContributorDropdown />
                </div>
                <AttendeeHeatMap />
            </div>
        </Card>
    );
};
