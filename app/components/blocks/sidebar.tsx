import { Link } from "@remix-run/react";
import {
  Badge,
  Bell,
  ChevronDown,
  ChevronsUpDown,
  CircleHelp,
  ClipboardMinus,
  CreditCard,
  FileClock,
  Info,
  LayoutDashboard,
  Package2,
  Pencil,
  Search,
  User,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { ProfileDropdown } from "./profile-dropdown";

const Sidebar = () => {
  // TODO: fix the chevron direction on the collapsible
  const [chevronUp, setChevronUp] = useState<boolean>(true);

  return (
    <div className="hidden bg-muted/40 md:block">
      <div className="flex h-full m-4 mt-0 border bg-card rounded-md max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <img src="./famcon-logo.png" className="size-10" />
            <span className="">FamCon</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <form className="mx-4 mb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>
          </form>
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-3">
            <Link
              to="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <CreditCard className="h-4 w-4" />
              Transact
            </Link>
            <Link
              to="/inventory"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <User className="h-4 w-4" />
              Contributors{" "}
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              User Management
            </Link>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 text-muted-foreground transition-all hover:text-primary">
                <Pencil className="h-4 w-4" />
                Configure
                <ChevronsUpDown className="size-4" />
              </CollapsibleTrigger>
              <div className="flex flex-col ml-6 my-2 gap-4">
                <CollapsibleContent>
                  <Link
                    to="#"
                    className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                  >
                    Months
                  </Link>
                </CollapsibleContent>
                <CollapsibleContent>
                  <Link
                    to="#"
                    className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    Categories
                  </Link>
                </CollapsibleContent>
              </div>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 text-muted-foreground transition-all hover:text-primary">
                <ClipboardMinus className="h-4 w-4" />
                Reports
                <ChevronsUpDown className="size-4" />
              </CollapsibleTrigger>
              <div className="flex flex-col ml-6 my-2 gap-4">
                <CollapsibleContent>
                  <Link
                    to="#"
                    className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                  >
                    Individual Statement
                  </Link>
                </CollapsibleContent>
                <CollapsibleContent>
                  <Link
                    to="#"
                    className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    Group Statement
                  </Link>
                </CollapsibleContent>
                <CollapsibleContent>
                  <Link
                    to="#"
                    className="rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    Receipts
                  </Link>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Line goes here */}
            <hr className="my-2 border-t border-gray-300/30 w-full" />
            <div className="my-4">
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <FileClock className="h-4 w-4" />
                Reminder Logs
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Info className="h-4 w-4" />
                About
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <CircleHelp className="h-4 w-4" />
                Help
              </Link>
            </div>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <ProfileDropdown userName="@glenmiracle" userTitle="admin" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
