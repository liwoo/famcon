import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@remix-run/react";

import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";

import { SummaryCard } from "@/components/atoms/summary-card";
import { RecentSales } from "@/components/blocks/recent-salse";
import TransactionsTable from "@/components/blocks/transactions-table";

const summaryCardArray = [
  {
    title: "Total Revenue",
    icon: DollarSign,
    mainValue: "$45,231.89",
    details: "+20.1% from last month",
  },

  {
    title: "Subscriptions",
    icon: Users,
    mainValue: "+2350",
    details: "+180.1% from last month",
  },

  {
    title: "Sales",
    icon: CreditCard,
    mainValue: "+12,234",
    details: "+19% from last month",
  },

  {
    title: "Active Now",
    icon: Activity,
    mainValue: "+573",
    details: "+201 since last hour",
  },
];
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {summaryCardArray.map((item) => (
          <SummaryCard
            title={item.title}
            mainValue={item.mainValue}
            icon={item.icon}
            key={item.title}
            details={item.details}
          />
        ))}
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Transactions</CardTitle>
              <CardDescription>
                Recent transactions from your store.
              </CardDescription>
            </div>
            <Button size="sm" className="ml-auto gap-1">
              <Link to="#">
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>

          {/* some table here */}
          <CardContent>
            <TransactionsTable />
          </CardContent>
        </Card>

        <RecentSales />
      </div>
    </div>
  );
}
