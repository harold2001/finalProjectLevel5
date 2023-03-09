import AuthNavbar from '@/Components/AuthNavbar'
import { Link } from '@inertiajs/react'
import React, { Fragment } from 'react'

export default function Vacantes({ me, mydata }) {
   const data = mydata.data;
   console.log(data);
   // console.log(me);
   return (
      <Fragment>
         <AuthNavbar name={me.name} />
         <div className="d-flex flex-column align-items-center" style={{ minHeight: "89vh", backgroundColor:"#d9e0e4" }}>
            <h1 className='h2 text-center my-4'>Administrar Vacantes</h1>
            <div className="card col-10">
               <div className="card-body">

                  {data.length === 0 ? (
                     <p className='fs-5 text-center'>No hay vacantes</p>
                  ) : (
                     <table className='table'>
                        <thead>
                           <tr>
                              <th>TÍTULO VACANTE</th>
                              <th className='text-center'>ESTADO</th>
                              <th className='text-center'>CANDIDATOS</th>
                              <th>ACCIONES</th>
                           </tr>
                        </thead>
                        <tbody>
                           {data.map((obj) => {
                              return (
                                 <tr key={obj.id}>
                                    <td style={{ height: "5rem" }}>
                                       <div className="d-flex flex-column justify-content-center h-full">
                                          <span className='fw-bold'>{obj.title}</span>
                                          <span className='' style={{ color: "gray" }}>Categoría: {obj.category_name.category}</span>
                                       </div>
                                    </td>
                                    <td style={{ height: "5rem" }}>
                                       <div className='d-flex h-full align-items-center justify-content-center'>
                                          <Link as='button' href={route("vacancyview.update", obj.id)} method="put">
                                             {obj.active === 1 ? (
                                                <span className='text-success fw-bold' style={{ fontSize: ".9rem" }}>Activo</span>
                                             ) : (
                                                <span className='text-danger fw-bold' style={{ fontSize: ".9rem" }}>Inactivo</span>
                                             )}
                                          </Link>
                                       </div>
                                    </td>
                                    <td style={{ color: "gray", fontSize: ".9rem", height: "5rem" }} >
                                       <div className="d-flex align-items-center justify-content-center h-full">
                                          <Link href={route("applicants.index")} method="get" data={{ id: obj.id }}>{obj.applicants.length} candidatos</Link>
                                       </div>
                                    </td>
                                    <td style={{ height: "5rem" }}>
                                       <div className='d-flex gap-3 align-items-center h-full'>
                                          <Link as='button' href={route("logged.edit", obj.id)} className='fw-bold' style={{ color: "#29a79b" }}>Editar</Link>
                                          <Link as='button' href={route("logged.destroy", obj.id)} data={{ id: obj.id }} method="delete" className='fw-bold text-danger' style={{ color: "#29a79b" }}>Eliminar</Link>
                                          <Link href={route("vacancies_index")} target="_blank" method="get" data={{ id: obj.id }} className='fw-bold ' style={{ color: "#5c83b1" }}>Ver</Link>
                                       </div>
                                    </td>
                                 </tr>
                              )
                           })}
                        </tbody>
                     </table>
                  )}
               </div>
            </div>
         </div>
      </Fragment>
   )
}

// data.map((obj) => {
//    return (
//       <tr key={obj.id}>
//          <td style={{ height: "5rem" }}>
//             <div className="d-flex flex-column justify-content-center h-full">
//                <span className='fw-bold'>{obj.title}</span>
//                <span className='' style={{ color: "gray" }}>Categoría: {obj.category_name.category}</span>
//             </div>
//          </td>
//          <td style={{ height: "5rem" }}>
//             <div className='d-flex h-full align-items-center justify-content-center'>
//                <Link as='button'>
//                   {obj.active === 1 ? (
//                      <span className='text-success fw-bold' style={{ fontSize: ".9rem" }}>Activo</span>
//                   ) : (
//                      <span className='text-danger fw-bold' style={{ fontSize: ".9rem" }}>Inactivo</span>
//                   )}
//                </Link>
//             </div>
//          </td>
//          <td style={{ color: "gray", fontSize: ".9rem", height: "5rem" }} >
//             <div className="d-flex align-items-center justify-content-center h-full">
//                <Link href={route("applicants.index")} method="get" data={{ id: obj.id }}>{obj.applicants.length} candidatos</Link>
//             </div>
//          </td>
//          <td style={{ height: "5rem" }}>
//             <div className='d-flex gap-3 align-items-center h-full'>
//                <Link href="#" className='fw-bold' style={{ color: "#29a79b" }}>Editar</Link>
//                <Link as='button' href={route("logged.destroy", obj.id)} data={{ id: obj.id }} method="delete" className='fw-bold text-danger' style={{ color: "#29a79b" }}>Eliminar</Link>
//                <Link href={route("vacancies_index")} target="_blank" method="get" data={{ id: obj.id }} className='fw-bold ' style={{ color: "#5c83b1" }}>Ver</Link>
//             </div>
//          </td>
//       </tr>
//    )
// })