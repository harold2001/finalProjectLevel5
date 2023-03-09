import { Link } from '@inertiajs/react'
import React from 'react'
import NavLink from './NavLink'

export default function GuestNavBar({ name }) {
   return (
      <nav className="navbar navbar-expand-lg flex-column justify-content-center align-items-center p-0 col-12" style={{ backgroundColor: "#303a49" }}>
         <div className='d-flex justify-content-between align-items-center py-2 col-12 col-md-10' style={{ height: "8vh" }}>
            <div className="d-flex justify-content-between align-items-center col-12">
               <Link className="navbar-brand text-white" href="/">
                  devJobs
               </Link>
               <div className='d-flex align-items-center justify-content-end gap-3'>
                  <span
                     className="ml-4 font-semibold focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                     style={{ color: "#d9e0e4" }}
                  >
                     {name}
                  </span>
                  <span className='rounded-4 px-3 fw-bold' style={{ color: "#d9e0e4", fontSize: ".9rem", backgroundColor: "#29a79b", paddingBottom: ".1rem", paddingTop: ".1rem" }}>
                     0
                  </span>
                  <Link
                     href={route('logout')}
                     method="post"
                     as="button"
                     className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >
                     Cerrar sesión
                  </Link>
               </div>
            </div>
         </div>

      </nav>
   )
}
