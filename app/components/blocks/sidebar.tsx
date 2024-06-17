import { Link } from '@remix-run/react';
import {
    ArrowLeft,
    Bell,
    ChevronLeft,
    ChevronRight,
    Search,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { ProfileDropdown } from './profile-dropdown';
import { NavItem } from '../atoms/nav-item';
import { CollapsibleChild, CollapsibleItem } from '../atoms/collapsible-item';
import { navItems, secondaryNavItems } from '@/data/nav';
import { FC, useState } from 'react';

interface SidebarProps {
    minimalSidebar?: boolean;
    toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({
    minimalSidebar = false,
    toggleSidebar,
}) => {
    // TODO(glen): Move this to a separate file

    return (
        <div className="hidden bg-muted/40 md:block">
            <div className="flex m-4 mt-0 border bg-card rounded-md h-[97%] lg:fixed flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    {!minimalSidebar ? (
                        <Link
                            to="/"
                            className="flex items-center gap-2 font-semibold"
                        >
                            <img
                                src="./famcon-logo.png"
                                className="size-10"
                                alt="logo"
                            />
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
                    {minimalSidebar ? null : (
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
                    )}
                    <nav className="grid items-start px-2 text-sm lg:px-4 gap-3">
                        {navItems.map((item) => {
                            if (item.children && minimalSidebar == false) {
                                return (
                                    <div className="lg:text-lg  mt-2">
                                        <CollapsibleItem
                                            key={item.label}
                                            label={
                                                minimalSidebar ? '' : item.label
                                            }
                                            icon={item.icon}
                                        >
                                            {item.children.map((child) => (
                                                <CollapsibleChild
                                                    key={child.label}
                                                    childLabel={
                                                        minimalSidebar
                                                            ? child.label[0]
                                                            : child.label
                                                    }
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
                                    label={minimalSidebar ? '' : item.label}
                                    href={item.href}
                                    icon={item.icon}
                                />
                            );
                        })}

                        {/* Line goes here */}
                        <hr className="my-2 border-t border-gray-300/30 w-full" />
                        <div className="my-4">
                            {secondaryNavItems.map((item) => (
                                <NavItem
                                    label={minimalSidebar ? '' : item.label}
                                    href={item.href}
                                    icon={item.icon}
                                    key={item.label}
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
