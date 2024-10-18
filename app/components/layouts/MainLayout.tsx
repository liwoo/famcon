import Sidebar from '../blocks/sidebar';
import LayoutHeader from '../blocks/layout-header';
import { useEffect, useState } from 'react';
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
    const [minimalSidebar, setMinimalSidebar] = useState<boolean>(false);
    const toggleSidebar = () => setMinimalSidebar(!minimalSidebar);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const tabletBreakpoint = 1024;
    const moblieBreakpoint = 640;

    //TODO: Add a toggle tablet menu callback

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });
    }, []);

    return (
        <div
            className={cn(
                windowWidth < tabletBreakpoint
                    ? `grid-cols-1`
                    : minimalSidebar
                    ? `md:grid-cols-[50px_1fr] lg:grid-cols-[120px_1fr]`
                    : `md:grid-cols-[220px_1fr] lg:grid-cols-[320px_1fr]`,
                `grid min-h-screen w-full p-4`
            )}
        >
            {windowWidth < tabletBreakpoint ? null : (
                <Sidebar
                    toggleSidebar={toggleSidebar}
                    minimalSidebar={minimalSidebar}
                />
            )}
            <div className="flex flex-col gap-y-4">
                <LayoutHeader
                    minimalSidebar={minimalSidebar}
                    title={title}
                    action={action}
                    isMobile={windowWidth < moblieBreakpoint}
                    isTablet={windowWidth < tabletBreakpoint}
                />
                <main className="flex flex-1 flex-col lg:mt-24">
                    {children}
                </main>
            </div>
        </div>
    );
}
