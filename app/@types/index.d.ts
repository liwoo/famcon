import { LucideIcon } from "lucide-react";

interface NavItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
  children?: NavItemProps[];
}

export interface TContributors {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dependent: boolean;
  contributionAmount: number;
  contributiionMethod: "monthly" | "annual";
  dateJoined: Date;
}

interface ContributorsDetailsProps {
  title: string;
  value: string;
  color: string;
}
