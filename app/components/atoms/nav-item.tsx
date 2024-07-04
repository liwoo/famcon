import { cn } from "@/lib/utils";
import { NavLink } from "@remix-run/react";
import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  label?: string | null;
  href: string;
  icon: LucideIcon;
  minimal: boolean;
}

export const NavItem = ({
  label,
  href,
  icon: Icon,

  minimal,
}: NavItemProps) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "flex lg:text-lg items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
          isActive ? "bg-muted text-muted-foreground" : "text-muted-foreground",
          minimal ? "flex items-center justify-center" : "",
        )
      }
    >
      <Icon className="s-4" />
      {label}
    </NavLink>
  );
};
