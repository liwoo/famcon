import {
  ChevronDown,
  Languages,
  LanguagesIcon,
  EllipsisIcon,
  MenuIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { Button } from "../ui/button";

import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetDescription,
  SheetTitle,
  SheetContent,
  SheetHeader,
  SheetFooter,
} from "../ui/sheet";
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
import { LanguageItem } from "../atoms/language-item";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Sidebar from "./sidebar";
import MdtoSmSidebar from "./md-sm-sidebar";

interface LayoutHeaderProps {
  title?: string;
  action?: React.ReactNode;
  minimalSidebar?: boolean;
  isTablet?: boolean;
  isMobile?: boolean;
  onToggleTabletMenu?: () => void;
}

const LayoutHeader = ({
  title = "Dashboard",
  action,
  minimalSidebar = false,
  isTablet = false,
  isMobile = false,
  onToggleTabletMenu = () => {},
}: LayoutHeaderProps) => {
  const hydrated = useHydrated();
  const [, rerender] = useState({});
  const setTheme = useCallback((theme: string) => {
    setSystemTheme(theme);
    rerender({});
  }, []);
  const theme = getTheme();
  const [language, setLanguage] = useState<string>("🇺🇸 English");
  const showSubmenu = useCallback(() => {
    //TODO: Render a submenu modal
    console.log("show submenu");
  }, []);
  const shouldShowSidebar = isTablet || isMobile;
  const langaugeArray = [
    "🇺🇸 English",
    "🇫🇷 French",
    "🇷🇼 Kinyarwanda",
    "🇰🇪 Swahili",
  ];
  return (
    <header
      className={cn(
        minimalSidebar
          ? `w-full lg:w-[calc(100%-150px)]`
          : `w-full lg:w-[calc(100%-350px)] `,
        `lg:fixed bg-card border rounded-lg flex items-center justify-between p-4 lg:p-6 mx-auto`
      )}
    >
      <div className="flex gap-x-2 items-center">
        {shouldShowSidebar && (
          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon className="size-6" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="rounded-r-3xl h-full w-[300px]"
            >
              <MdtoSmSidebar
                toggleSidebar={showSubmenu}
                className="rounded-none border-none cursor-pointer"
              />
            </SheetContent>
            <SheetClose />
          </Sheet>
        )}
        <h1 className="text-xl">{title}</h1>
      </div>
      {isMobile && <EllipsisIcon onClick={showSubmenu} className="size-6" />}
      {!isMobile && (
        <div className="flex items-center gap-2">
          {action}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="w-auto h-10 rounded-md border "
                size="icon"
                variant="ghost"
              >
                <div className="p-2 flex  items-center gap-2">
                  {/* <Languages className="size-6" /> */}
                  <h1 className="text-sm">{language}</h1>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {langaugeArray.map((lang) => (
                <DropdownMenuItem asChild key={lang}>
                  <LanguageItem
                    type="button"
                    className="w-full flex gap-2 items-center"
                    languageProp={lang}
                    onClick={() => setLanguage(`${lang}`)}
                  />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
              <DropdownMenuItem asChild className="flex items-center gap-2">
                <button
                  type="button"
                  className="w-full"
                  onClick={() => setTheme("light")}
                  aria-selected={theme === "light"}
                >
                  <SunIcon className="size-6" />
                  Light
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="flex items-center gap-2">
                <button
                  type="button"
                  className="w-full"
                  onClick={() => setTheme("dark")}
                  aria-selected={theme === "dark"}
                >
                  <MoonIcon className="size-6" />
                  Dark
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="flex items-center gap-2">
                <button
                  type="button"
                  className="w-full"
                  onClick={() => setTheme("system")}
                  aria-selected={theme === "system"}
                >
                  <LaptopIcon className="size-6" />
                  System
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;
