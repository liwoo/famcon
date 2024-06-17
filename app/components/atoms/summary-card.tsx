import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface SummaryCardProps {
  title: string;
  icon: LucideIcon;
  mainValue: string;
  details: string;
}

export const SummaryCard = ({
  title,
  icon: Icon,
  mainValue,
  details,
}: SummaryCardProps) => {
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{mainValue}</div>
        <p className="text-xs text-muted-foreground">{details}</p>
      </CardContent>
    </Card>
  );
};
