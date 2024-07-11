import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SummaryCardProps {
  title: string;
  mainValue: string;
}

export const AttendanceSummaryCard = ({
  title,
  mainValue,
}: SummaryCardProps) => {
  return (
    <Card x-chunk="dashboard-01-chunk-0" className="w-[138px] h-auto">
      <CardHeader className="flex items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-light ">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-center">{mainValue}</div>
      </CardContent>
    </Card>
  );
};
