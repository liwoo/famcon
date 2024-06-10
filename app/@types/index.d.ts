interface NavItemProps {
    label: string;
    icon: React.FC;
    href: string;
    children?: NavItemProps[];
}
