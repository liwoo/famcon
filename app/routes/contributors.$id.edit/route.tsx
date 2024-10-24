import { LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

// -> Loaders get called when the route is hit
// from the server side
export const loader: LoaderFunction = async ({ params }) => {
    // Fetch data from the server
    const userId = params.id as string;

    return json({ userId });
};

// -> Actions get called when a form is submitted
// from the server side

// -> Default components get rendered AFTER the
// page is loaded on the client side
export default function ContributorEdit() {
    const { userId } = useLoaderData<typeof loader>();
    // Implement edit form
    return <div>Edit Contributor {userId} </div>;
}
