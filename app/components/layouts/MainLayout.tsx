import Sidebar from '../blocks/sidebar';
import LayoutHeader from '../blocks/layout-header';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
    title?: string;
    action?: React.ReactNode;
    children: React.ReactNode;
}

export default function MainLayout({
    children,
    action,
    title = 'Dashboard',
}: MainLayoutProps) {
    const [minimalSidebar, setMinimalSidebar] = useState(false);
    const toggleSidebar = () => setMinimalSidebar(!minimalSidebar);

    return (
        <div
            className={cn(
                minimalSidebar
                    ? `md:grid-cols-[50px_1fr] lg:grid-cols-[120px_1fr]`
                    : `md:grid-cols-[220px_1fr] lg:grid-cols-[320px_1fr]`,
                `grid min-h-screen w-full p-4`,
            )}
        >
            <Sidebar
                toggleSidebar={toggleSidebar}
                minimalSidebar={minimalSidebar}
            />
            <div className="flex flex-col gap-y-4">
                <LayoutHeader
                    minimalSidebar={minimalSidebar}
                    title={title}
                    action={action}
                />
                <main className="flex flex-1 flex-col lg:mt-24">
                    {children}
                </main>
            </div>
        </div>
    );
}
