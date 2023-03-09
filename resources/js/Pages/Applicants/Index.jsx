import AuthNavbar from '@/Components/AuthNavbar'
import { Link } from '@inertiajs/react';
import React, { Fragment } from 'react'

export default function Index({ data }) {
   const applicants = data.data;
   console.log(applicants);
   return (
      <Fragment>
         <AuthNavbar />
         <div style={{ minHeight: "89vh", backgroundColor: "#d9e0e4" }} className="d-flex justify-content-center col-12 pb-4">
            <div>
               <h1 className='h2 my-4'>Candidatos: {applicants[0].vacancy_name.title}</h1>
               <div className='d-flex flex-column gap-4'>
                  {applicants.length === 0 ? (
                     <p className='text-center fs-6'>No hay candidatos</p>
                  ) : (
                     applicants.map((obj) => {
                        return (
                           <div className="card rounded-0 bg-transparent p-0" key={obj.id}>
                              <div className="card-body p-3 d-flex flex-column gap-2">
                                 <p>Nombre: <strong>{obj.applicant_name.name}</strong></p>
                                 <p>Email: <strong>{obj.applicant_name.email}</strong></p>
                                 <div>
                                    {/* <Link href='#' className='btn rounded-none border-0 text-white fw-bold py-2' style={{ backgroundColor: "#29a79b" }}>Ver CV</Link> */}
                                    {obj.applicant_name.cv_name === null ? (
                                       <p className='text-center text-danger fw-bold'>No hay un CV registrado</p>
                                    ) : (
                                       <a href={"pdf/" + obj.applicant_name.cv_name} target="_blank" rel="noopener noreferrer" className='btn rounded-none border-0 text-white fw-bold py-2' style={{ backgroundColor: "#29a79b" }}>Ver CV</a>
                                    )}
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  )}

               </div>
            </div>
         </div>
      </Fragment>
   )
}
