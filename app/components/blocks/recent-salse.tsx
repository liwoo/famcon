import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: {
      src: "/avatars/01.png",
      fallback: "OM",
    },
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: {
      src: "/avatars/02.png",
      fallback: "JL",
    },
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: {
      src: "/avatars/03.png",
      fallback: "IN",
    },
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: {
      src: "/avatars/04.png",
      fallback: "WK",
    },
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: {
      src: "/avatars/05.png",
      fallback: "SD",
    },
  },
  {
    name: "Liam Brown",
    email: "liam.brown@email.com",
    amount: "+$199.00",
    avatar: {
      src: "/avatars/06.png",
      fallback: "LB",
    },
  },
  {
    name: "Emily Clark",
    email: "emily.clark@email.com",
    amount: "+$59.00",
    avatar: {
      src: "/avatars/07.png",
      fallback: "EC",
    },
  },
];

export const RecentSales = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {recentSales.map((sale) => (
          <div className="flex items-center gap-4" key={sale.name}>
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src={sale.avatar.src} alt="Avatar" />
              <AvatarFallback>{sale.avatar.fallback}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{sale.name}</p>
              <p className="text-sm text-muted-foreground">{sale.email}</p>
            </div>
            <div className="ml-auto font-medium">{sale.amount}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
