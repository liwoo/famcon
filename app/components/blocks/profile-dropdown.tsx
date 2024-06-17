import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Link } from '@remix-run/react';
import {
    ChevronsUpDown,
    HelpCircle,
    LogOutIcon,
    SettingsIcon,
} from 'lucide-react';
import { AvatarImage, Avatar, AvatarFallback } from '../ui/avatar';
import { cn } from '@/lib/utils';

interface ProfileDropdownProps {
    withMinimal?: boolean;
}

export function ProfileDropdown({ withMinimal }: ProfileDropdownProps) {
    return (
        <div className="w-full cursor-pointer flex items-center">
            <Popover>
                <PopoverTrigger asChild>
                    <div className="border rounded-md p-2 flex items-center ">
                        <div className="flex">
                            <Avatar
                                className={cn(
                                    withMinimal ? `size-8` : `size-12`,
                                    `rounded-md`,
                                )}
                            >
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>MK</AvatarFallback>
                            </Avatar>
                            {withMinimal ? null : (
                                <div className="flex flex-col justify-between p-2 text-start">
                                    <h1>Maria Karl</h1>
                                    <p className="text-gray-400 text-sm">
                                        mariakrl@example.com
                                    </p>
                                </div>
                            )}
                        </div>
                        {withMinimal ? null : (
                            <ChevronsUpDown className="text-gray-500" />
                        )}
                    </div>
                </PopoverTrigger>
                <PopoverContent className="p-2 flex flex-col">
                    <div className="flex  items-center">
                        <div className="bg-gray-100 flex justify-center items-center p-4 size-16 rounded-md text-gray-600">
                            HR
                        </div>
                        <div className="flex flex-col justify-between p-2 text-start">
                            <h1>Role Name</h1>
                            <p className="text-gray-400">Roles</p>
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 my-4 w-full" />
                    <div className="flex flex-col gap-4">
                        <Link className="flex gap-2" to="#">
                            <HelpCircle />
                            <h1>Helo & Support</h1>
                        </Link>
                        <Link className="flex gap-2" to="#">
                            <SettingsIcon />
                            <h1>Settings</h1>
                        </Link>
                        <Link className="flex gap-2 text-red-600" to="#">
                            <LogOutIcon />
                            <h1>Logout</h1>
                        </Link>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
