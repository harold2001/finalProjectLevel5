import { Link } from '@inertiajs/react';
import React, { Fragment } from 'react';
import NavLink from './NavLink';


export default function NavBar(data) {
   return (
      <Fragment>
         <nav className="navbar navbar-expand-lg flex-column justify-content-center align-items-center p-0 col-12" style={{ backgroundColor: "#303a49" }}>
            <div className='d-flex justify-content-between align-items-center py-2 col-12 col-md-10' style={{ height: "7vh" }}>
               <div className="d-flex justify-content-between align-items-center col-12">
                  <Link className="navbar-brand text-white" href="/">
                     devJobs
                  </Link>
                  <div>

                     {data.data !== null ? (
                        <Link
                           href={route('logged.index')}
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
                              Acceder
                           </Link>
                           <Link
                              href={route('register')}
                              className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                           >
                              Registro
                           </Link>
                        </>
                     )}
                  </div>
               </div>
            </div>
            <div className='d-flex align-items-center justify-content-center col-12' style={{ backgroundColor: "#475366", height: "4vh" }}>
               <div className=" d-flex align-items-center justify-content-md-start gap-md-4 col-12 col-md-10" >
                  <NavLink
                     href="/results?category=1"
                     className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                  >
                     FRONT END
                  </NavLink>
                  <NavLink
                     href="/results?category=2"
                     className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                  >
                     BACKEND
                  </NavLink>
                  <NavLink
                     href="/results?category=3"
                     className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                  >
                     FULL STACK
                  </NavLink>
                  <NavLink
                     href="/results?category=4"
                     className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                  >
                     DEVOPS
                  </NavLink>
                  <NavLink
                     href="/results?category=5"
                     className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                  >
                     DBA
                  </NavLink>
                  <NavLink
                     href="/results?category=6"
                     className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                  >
                     UX / UI
                  </NavLink>
                  <NavLink
                     href="/results?category=7"
                     className="font-semibold text-sm text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                  >
                     TECHLEAD
                  </NavLink>
               </div>
            </div>
         </nav>
      </Fragment>
   )
}
