import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useHydrated } from "remix-utils/use-hydrated";
import { useCallback, useState } from "react";
import {
  getTheme,
  setTheme as setSystemTheme,
} from "@/components/theme-switcher";

interface LayoutHeaderProps {
  title?: String;
}

const LayoutHeader = ({ title = "Dashboard" }: LayoutHeaderProps) => {
  const hydrated = useHydrated();
  const [, rerender] = useState({});
  const setTheme = useCallback((theme: string) => {
    setSystemTheme(theme);
    rerender({});
  }, []);
  const theme = getTheme();

  return (
    <header className="w-full bg-card border rounded-lg flex items-center justify-between p-4 lg:p-6 mx-auto">
      <h1 className="text-xl">{title}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="w-10 h-10 rounded-full border"
            size="icon"
            variant="ghost"
          >
            <span className="sr-only">Theme selector</span>
            {!hydrated ? null : theme === "dark" ? (
              <MoonIcon />
            ) : theme === "light" ? (
              <SunIcon />
            ) : (
              <LaptopIcon />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2">
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <button
              type="button"
              className="w-full"
              onClick={() => setTheme("light")}
              aria-selected={theme === "light"}
            >
              Light
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button
              type="button"
              className="w-full"
              onClick={() => setTheme("dark")}
              aria-selected={theme === "dark"}
            >
              Dark
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button
              type="button"
              className="w-full"
              onClick={() => setTheme("system")}
              aria-selected={theme === "system"}
            >
              System
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default LayoutHeader;
