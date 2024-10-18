import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const transactions = [
    {
        customer: {
            name: 'Liam Johnson',
            email: 'liam@example.com',
        },
        type: 'Sale',
        status: {
            text: 'Fulfilled',
            variant: 'secondary',
        },
        date: '2023-06-23',
        amount: '$250.00',
    },
    {
        customer: {
            name: 'Olivia Smith',
            email: 'olivia@example.com',
        },
        type: 'Refund',
        status: {
            text: 'Declined',
            variant: 'outline',
        },
        date: '2023-06-24',
        amount: '$150.00',
    },
    {
        customer: {
            name: 'Noah Williams',
            email: 'noah@example.com',
        },
        type: 'Subscription',
        status: {
            text: 'Fulfilled',
            variant: 'secondary',
        },
        date: '2023-06-25',
        amount: '$350.00',
    },
    {
        customer: {
            name: 'Emma Brown',
            email: 'emma@example.com',
        },
        type: 'Sale',
        status: {
            text: 'Fulfilled',
            variant: 'secondary',
        },
        date: '2023-06-26',
        amount: '$450.00',
    },
    {
        customer: {
            name: 'James Taylor',
            email: 'james@example.com',
        },
        type: 'Refund',
        status: {
            text: 'Declined',
            variant: 'outline',
        },
        date: '2023-06-27',
        amount: '$200.00',
    },
    {
        customer: {
            name: 'Sophia Lee',
            email: 'sophia@example.com',
        },
        type: 'Sale',
        status: {
            text: 'Fulfilled',
            variant: 'secondary',
        },
        date: '2023-06-28',
        amount: '$300.00',
    },
    {
        customer: {
            name: 'Mason Martinez',
            email: 'mason@example.com',
        },
        type: 'Subscription',
        status: {
            text: 'Fulfilled',
            variant: 'secondary',
        },
        date: '2023-06-29',
        amount: '$400.00',
    },
];
const TransactionsTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Type</TableHead>
                    <TableHead className="hidden sm:table-cell">
                        Status
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactions.map((transaction, index) => (
                    <TableRow
                        key={index}
                        className={index % 2 === 0 ? 'bg-accent' : ''}
                    >
                        <TableCell>
                            <div className="font-medium">
                                {transaction.customer.name}
                            </div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                                {transaction.customer.email}
                            </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                            {transaction.type}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                            <Badge
                                className="text-xs"
                                variant={transaction.status.variant}
                            >
                                {transaction.status.text}
                            </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                            {transaction.date}
                        </TableCell>
                        <TableCell className="text-right">
                            {transaction.amount}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TransactionsTable;
