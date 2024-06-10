import { Link } from '@remix-run/react';
import {
    Bell,
    BellRing,
    BookOpen,
    CircleHelp,
    ClipboardMinus,
    Pencil,
    Search,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { ProfileDropdown } from './profile-dropdown';
import { NavItem } from '../atoms/nav-item';
import { CollapsibleChild, CollapsibleItem } from '../atoms/collapsible-item';
import { navItems } from '@/data/nav';

const Sidebar = () => {
    // TODO(glen): Move this to a separate file
    const SecondaryNavItems = [
        { label: 'Reminder', icon: BellRing, href: '#' },
        { label: 'About', icon: BookOpen, href: '#' },
        { label: 'Help', icon: CircleHelp, href: '#' },
    ];

    return (
        <div className="hidden bg-muted/40 md:block">
            <div className="flex h-full m-4 mt-0 border bg-card rounded-md max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link
                        to="/"
                        className="flex items-center gap-2 font-semibold"
                    >
                        <img src="./famcon-logo.png" className="size-10" />
                        <span className="">FamCon</span>
                    </Link>
                    <Button
                        variant="outline"
                        size="icon"
                        className="ml-auto h-8 w-8"
                    >
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
                    <nav className="grid items-start px-2 text-sm lg:px-4 gap-3">
                        {navItems.map((item, idx) => {
                            if (item.children) {
                                return (
                                    <div className="text-lg  mt-2">
                                        <CollapsibleItem
                                            key={item.label}
                                            label={item.label}
                                            icon={item.icon}
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
                                    key={idx}
                                    label={item.label}
                                    href={item.href}
                                    // TODO: fix this type issue
                                    icon={item.icon}
                                    key={idx}
                                />
                            );
                        })}

                        {/* Line goes here */}
                        <hr className="my-2 border-t border-gray-300/30 w-full" />
                        <div className="my-4">
                            {SecondaryNavItems.map((item, idx) => (
                                <NavItem
                                    label={item.label}
                                    href={item.href}
                                    icon={item.icon}
                                    key={idx}
                                />
                            ))}
                        </div>
                    </nav>
                </div>
                <div className="mt-auto p-4 w-full overflow-hidden">
                    <ProfileDropdown />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
