import NavBar from '@/Components/NavBar';
import { Link, Head } from '@inertiajs/react';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Welcome/Home';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <HashRouter>
                <nav className="navbar navbar-expand-lg flex-column justify-content-center align-items-center p-0 col-12" style={{ backgroundColor: "#303a49"}}>
                    <div className='d-flex justify-content-between align-items-center py-2 col-12 col-md-10' style={{ height:"7vh" }}>
                        <div className="d-flex justify-content-between align-items-center col-12">
                            <a className="navbar-brand text-white" href="#">
                                devJobs
                            </a>
                            <div>
                                <Link
                                    href={route('login')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Acceder
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Registro
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center col-12' style={{ backgroundColor: "#475366", height:"4vh" }}>
                        <div className=" d-flex align-items-center justify-content-md-start gap-md-4 col-12 col-md-10" >
                            <NavLink
                                href="#"
                                className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                            >
                                FRONT END
                            </NavLink>
                            <NavLink
                                href="#"
                                className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                            >
                                BACKEND
                            </NavLink>
                            <NavLink
                                href="#"
                                className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                            >
                                FULL STACK
                            </NavLink>
                            <NavLink
                                href="#"
                                className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                            >
                                DEVOPS
                            </NavLink>
                            <NavLink
                                href="#"
                                className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                            >
                                DBA
                            </NavLink>
                            <NavLink
                                href="#"
                                className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                            >
                                UX / UI
                            </NavLink>
                            <NavLink
                                href="#"
                                className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                            >
                                TECHLEAD
                            </NavLink>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </HashRouter>

            {/* <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {props.auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div> */}
        </>
    );
}
