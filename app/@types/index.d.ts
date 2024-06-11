import { LucideIcon } from "lucide-react";

interface NavItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
  children?: NavItemProps[];
}
