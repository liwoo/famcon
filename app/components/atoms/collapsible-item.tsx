import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { NavLink } from "@remix-run/react";
import { ChevronsUpDown, Pencil } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CollapsibleItemProps {
  label: string;
  icon: LucideIcon;
  children: ReactNode[];
  withMinimalSidebar: boolean | null;
}

export const CollapsibleItem = ({
  label,
  icon: Icon,
  children,
  withMinimalSidebar,
}: CollapsibleItemProps) => {
  return !withMinimalSidebar ? (
    <Collapsible>
      <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 text-muted-foreground transition-all hover:text-primary ">
        <Icon className="size-6" />
        {label}
        <ChevronsUpDown className="size-4" />
      </CollapsibleTrigger>
      <div className="flex flex-col ml-6 my-2 gap-4">
        {children &&
          children.map((child, index) => (
            <CollapsibleContent key={index}>{child}</CollapsibleContent>
          ))}
      </div>
    </Collapsible>
  ) : (
    <Popover>
      <PopoverTrigger className="flex items-center gap-3 rounded-lg px-3 text-muted-foreground transition-all hover:text-primary">
        <Icon className="size-6" />
        {label}
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        {children &&
          children.map((child, index) => <div key={index}>{child}</div>)}
      </PopoverContent>
    </Popover>
  );
};

interface CollapsibleChildProps {
  childLabel: string;
  href: string;
}

//  {TODO: handle active state (glen)}
export const CollapsibleChild: React.FC<CollapsibleChildProps> = ({
  childLabel,
  href,
}) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? "rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-black bg-slate-100"
          : "rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-black"
      }
    >
      {childLabel}
    </NavLink>
  );
};
