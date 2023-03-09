import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <div>HOLA
            <Link className='btn btn-primary' href={route('logout')} method="post" as="button">LOGOUT</Link>
        </div>
    );
}
