import { Link } from "@remix-run/react";
import {
  ArrowLeft,
  Bell,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { ProfileDropdown } from "./profile-dropdown";
import { NavItem } from "../atoms/nav-item";
import { CollapsibleChild, CollapsibleItem } from "../atoms/collapsible-item";
import { navItems, secondaryNavItems } from "@/data/nav";
import { FC, useRef, useState } from "react";
import { cn } from "@/lib/styles";

interface SidebarProps {
  minimalSidebar?: boolean;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  minimalSidebar = false,
  toggleSidebar,
}) => {
  // TODO(glen): Move this to a separate file
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchIconClick = () => {
    toggleSidebar(); // Maximize the sidebar
    setTimeout(() => {
      searchInputRef.current?.focus(); // Focus the search input after the sidebar is maximized
    }, 0);
  };

  return (
    <div className="hidden bg-muted/40 md:block">
      <div className="flex m-4 mt-0 border bg-card rounded-md h-[97%] lg:fixed flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          {!minimalSidebar ? (
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <img src="./famcon-logo.png" className="size-10" alt="logo" />
              <span className="">FamCon</span>
            </Link>
          ) : null}
          <Button
            variant="outline"
            size="icon"
            className="ml-auto h-8 w-8"
            onClick={toggleSidebar}
          >
            {minimalSidebar ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>
        <div className="flex-1">
          {minimalSidebar ? (
            <div
              className="relative items-center flex justify-center cursor-pointer"
              onClick={handleSearchIconClick}
            >
              <Search className="absolute left-4 ml-3 top-2.5 s-6 text-muted-foreground hover:text-black" />
              {/* TODO: automatically set focus to the search inpu field */}
            </div>
          ) : (
            <form className="mx-4 my-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none"
                />
              </div>
            </form>
          )}
          <nav
            className={cn(
              "grid items-center px-2 text-sm lg:px-4 gap-3",
              minimalSidebar ? "mt-12" : "",
            )}
          >
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div className="lg:text-lg mt-2">
                    <CollapsibleItem
                      key={item.label}
                      label={item.label}
                      icon={item.icon}
                      withMinimalSidebar={minimalSidebar}
                    >
                      {item.children.map((child) => (
                        <CollapsibleChild
                          key={child.label}
                          childLabel={child.label}
                          href={child.href}
                        />
                      ))}
                    </CollapsibleItem>
                  </div>
                );
              }

              return (
                <NavItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  minimal={minimalSidebar}
                />
              );
            })}

            {/* seperator line */}
            <hr className="my-2 border-t border-gray-300/30 w-full" />

            <div className="my-4">
              {secondaryNavItems.map((item) => (
                <NavItem
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  key={item.label}
                  minimal={minimalSidebar}
                />
              ))}
            </div>
          </nav>
        </div>
        <div className="mt-auto p-4 w-full overflow-hidden">
          <ProfileDropdown withMinimal={minimalSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
