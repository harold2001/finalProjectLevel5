import NavBar from '@/Components/NavBar'
import { router, useForm } from '@inertiajs/react';
import React, { Fragment, useState } from 'react'

export default function Index({ vacancy, url, flash }) {
   const datos = vacancy.data[0];

   const { data, setData, post, progress } = useForm({
      id: datos.id,
      name: null,
      email: null,
      curriculum: null,
   })

   // function handleChange(e) {
   //    const key = e.target.id;
   //    const value = e.target.value
   //    setValues(values => ({
   //       ...values,
   //       [key]: value,
   //    }))
   // }

   function handleSubmit(e) {
      e.preventDefault()
      // console.log(values);
      post(url)
   }

   return (
      <Fragment>
         <NavBar />
         {flash.message !== null ? (
            <div className="alert alert-success col-12 text-center h3 m-0 py-3 rounded-0 border-0">
               <span>{flash.message}</span>
            </div>
         ) : ""}
         <div className='d-flex justify-content-center' style={{ backgroundColor: "#d9e0e4", minHeight: "89vh" }}>
            <div className='container-fluid col-9 d-flex flex-wrap'>
               <h1 className='h2 text-center col-12 mt-4 mb-3'>{datos.title}</h1>
               <div className='col-7'>
                  <p><strong>Publicado:</strong></p>
                  <p><strong>Por:</strong> {datos.user_name.name}</p>
                  <p><strong>Categoría:</strong> {datos.category_name.category}</p>
                  <p><strong>Salario:</strong> {datos.salary_name.salary}</p>
                  <p><strong>Ubicación:</strong> {datos.location_name.location}</p>
                  <p><strong>Experiencia:</strong> {datos.experience_name.experience}</p>
                  <h2 className='h3 text-center mt-5 mb-4'>Conocimientos y Tecnologías</h2>
                  <div className='col-12 d-flex gap-1 flex-wrap'>
                     {datos.abilities.map((obj) => {
                        return (
                           <div key={obj.id} className='rounded-1 py-1 px-4 mb-3' style={{ border: "1px solid #b4b9bd " }}>
                              {obj.ability_name.ability}
                           </div>
                        )
                     })}
                  </div>
                  <h2 className='h3 mt-4'>Solicitamos {datos.title}</h2>
                  <p>{datos.description}</p>
               </div>
               <div className='col-5'>
                  <div className='rounded-1 p-4' style={{ backgroundColor: "#2aa79e" }}>
                     <p className='h4 text-center text-white fw-bold mt-3'>CONTACTA AL RECLUTADOR</p>
                     <form onSubmit={handleSubmit}>
                        {/* <input type="number" name='idvacancy' hidden value={datos.id} onChange={handleChange}/> */}

                        <label htmlFor="name" className='form-label text-white'>Nombre:</label>
                        <input type="text" name='name' id='name' className='form-control mb-3 border-0 rounded-1' placeholder='Tu nombre' required style={{ backgroundColor: "#e6e7ea" }} onChange={e => setData('name', e.target.value)} />

                        <label htmlFor="email" className='form-label text-white'>Email:</label>
                        <input type="email" name='email' id='email' className='form-control mb-3 border-0 rounded-1' placeholder='Tu email' required style={{ backgroundColor: "#e6e7ea" }} onChange={e => setData('email', e.target.value)} />

                        <label htmlFor="curriculum" className='form-label text-white'>Curriculum (PDF:)</label>
                        <input type="file" className='form-control mb-3' accept='application/pdf' id='curriculum' name='curriculum' onChange={e => setData('curriculum', e.target.files[0])} required />

                        <button type="submit" className='btn text-white fw-bold mt-3 col-12 rounded-1' style={{ backgroundColor: "#238d88" }}>CONTACTAR</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
