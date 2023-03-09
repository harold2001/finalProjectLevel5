import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import { Fragment } from 'react';
import GuestNavBar from '@/Components/GuestNavBar';

export default function VerifyEmail({ status, request }) {
    const { post, processing } = useForm({});

    console.log(request.name);

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        // <GuestLayout>
        <div className='h-screen flex flex-column items-center'>
            <Head title="Verifica tu correo" />
            <GuestNavBar name={request.name} />
            <div className="mb-3 mt-5 text-sm text-gray-600 text-center flex flex-column">
                <h1 className='h4'>Confirma tu correo electrónico</h1>
                <p>Antes de poder continuar, por favor confirma tu correo electrónico con el enlace que te hemos enviado.</p>
                <p>Si no has recibido el correo...</p>
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    Un nuevo link de verificación ha sido enviado a la dirección de correo electrónico que registraste.
                </div>
            )}

            <form onSubmit={submit} className='w-full'>
                <div className="flex items-center justify-between flex-column gap-3 w-full">
                    <PrimaryButton disabled={processing} className=''>PULSA AQUÍ PARA QUE TE ENVIEMOS OTRO</PrimaryButton>
                </div>
            </form>
        </div>
        // </GuestLayout>
    );
}
