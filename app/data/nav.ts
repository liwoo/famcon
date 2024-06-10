import { CreditCard, LayoutDashboard, User, Users } from 'lucide-react';

export const navItems: NavItemProps[] = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { label: 'Transact', icon: CreditCard, href: '/transact' },
    { label: 'Contributions', icon: User, href: '/contributors' },
    {
        label: 'User Management',
        icon: Users,
        href: '#',
        children: [
            { label: 'Users', icon: Users, href: '/user-management/users' },
            { label: 'Roles', icon: Users, href: '/user-management/roles' },
        ],
    },
    {
        label: 'Configure',
        icon: Users,
        href: '#',
        children: [
            { label: 'Months', icon: Users, href: '/configure/months' },
            {
                label: 'Categories',
                icon: Users,
                href: '/configure/categories',
            },
        ],
    },
    {
        label: 'Reports',
        icon: Users,
        href: '#',
        children: [
            {
                label: 'Individual Statement',
                icon: Users,
                href: '/reports/individual-statement',
            },
            {
                label: 'Group Statement',
                icon: Users,
                href: '/reports/group-statement',
            },
            { label: 'Receipts', icon: Users, href: '/reports/receipts' },
        ],
    },
];
