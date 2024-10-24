import MainLayout from '@/components/layouts/MainLayout';

import { Button } from '@/components/ui/button';

import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';

import { columns } from './components/columns';
import { CrudList } from '@/components/blocks/crud-list';
import { TContributor, TPartialContributor } from '@/@types/contributors';
import { ContributorService } from '@/services/contributors/contributor-service';
import { useLoaderData, useNavigate } from '@remix-run/react';
import { ContributorSummaryCard } from './components/contributor-summary-card';
import { LoaderFunction, json } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
    const service = new ContributorService();
    const contributors = await service.getAll();
    return json({ contributors });
};

// @Authorized(['admin'])
export default function Contributors() {
    const navigate = useNavigate();
    const { contributors } = useLoaderData<typeof loader>();

    return (
        <MainLayout
            title="Contributors"
            action={
                <Button
                    className="bg-teal-900"
                    onClick={() => navigate('/contributors/create')}
                >
                    <Plus /> Add Contributor
                </Button>
            }
        >
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 w-full">
                    <ContributorSummaryCard />
                </div>
                <Card className="p-4">
                    <CrudList<
                        TPartialContributor,
                        TContributor,
                        TContributor,
                        ContributorService
                    >
                        columns={columns}
                        data={contributors}
                        baseRoute={'/contributors'}
                        title="Contributors"
                    ></CrudList>
                </Card>
            </div>
        </MainLayout>
    );
}
