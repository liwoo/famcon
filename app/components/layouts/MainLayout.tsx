import Sidebar from '../blocks/sidebar';
import LayoutHeader from '../blocks/layout-header';

interface MainLayoutProps {
    title?: string;
    children: React.ReactNode;
}

export default function MainLayout({
    children,
    title = 'Dashboard',
}: MainLayoutProps) {
    return (
        <div className="grid min-h-screen w-full p-4 md:grid-cols-[220px_1fr] lg:grid-cols-[320px_1fr]">
            <Sidebar />
            <div className="flex flex-col gap-y-4">
                <LayoutHeader title={title} />
                <main className="flex flex-1 flex-col">{children}</main>
            </div>
        </div>
    );
}
