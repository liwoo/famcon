import { MetaFunction } from '@remix-run/react';
import MainLayout from '@/components/layouts/MainLayout';
import Dashboard from './Dashboard';

export const meta: MetaFunction = () => {
    return [
        { title: 'Welcome to FamCon' },
        { name: 'description', content: 'Welcome to Family Contributor!' },
    ];
};

export default function Index() {
    return (
        <MainLayout>
            <Dashboard />
        </MainLayout>
    );
}
