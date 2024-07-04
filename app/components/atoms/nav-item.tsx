import { cn } from "@/lib/utils";
import { NavLink } from "@remix-run/react";
import type { LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItemProps {
  label?: string;
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
    <TooltipProvider>
      <Tooltip>
        <NavLink
          to={href}
          className={({ isActive }) =>
            cn(
              "flex lg:text-lg items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
              isActive
                ? "bg-muted text-muted-foreground"
                : "text-muted-foreground",
              minimal ? "flex items-center justify-center" : "",
            )
          }
        >
          <TooltipTrigger>
            <Icon className="s-4" />
          </TooltipTrigger>
          {
            <TooltipContent className="w-auto bg-white z-999">
              <p className="text-black text-md ">{label}</p>
            </TooltipContent>
          }
          {minimal ? "" : <p>{label}</p>}
        </NavLink>
      </Tooltip>
    </TooltipProvider>
  );
};
