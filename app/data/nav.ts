import type { NavItemProps } from "@/@types";
import {
  BellRing,
  Book,
  BookOpen,
   Bug,
  CircleHelp,
  CreditCard,
  LayoutDashboard,
  User,
  Users,
  
 
} from "lucide-react";

export const navItems: NavItemProps[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Transact", icon: CreditCard, href: "/transact" },
  { label: "Contributions", icon: User, href: "/contributors" },
  {
    label: "User Management",
    icon: Users,
    href: "#",
    children: [
      { label: "Users", icon: Users, href: "/user-management/users" },
      { label: "Roles", icon: Users, href: "/user-management/roles" },
    ],
  },
  {
    label: "Configure",
    icon: Book,
    href: "#",
    children: [
      { label: "Months", icon: Book, href: "/configure/months" },
      {
        label: "Categories",
        icon: Book,
        href: "/configure/categories",
      },
    ],
  },
  {
    label: "Reports",
    icon: Bug,
    href: "#",
    children: [
      {
        label: "Individual Statement",
        icon: Bug,
        href: "/reports/individual-statement",
      },
      {
        label: "Group Statement",
        icon: Bug,
        href: "/reports/group-statement",
      },
      { label: "Receipts", icon: Bug, href: "/reports/receipts" },
    ],
  },
];

export const secondaryNavItems: NavItemProps[] = [
  { label: "Reminder", icon: BellRing, href: "/reminder" },
  { label: "About", icon: BookOpen, href: "/about" },
  { label: "Help", icon: CircleHelp, href: "/help" },
];
