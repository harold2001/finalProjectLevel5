import AuthNavbar from '@/Components/AuthNavbar'
import { router } from '@inertiajs/react';
import React, { Fragment, useState } from 'react'
import "./create.css";

export default function Create({ me, mydata, categories, experiences, locations, salaries, abilities, url }) {
   let value = null;

   const initialState = [];
   const [values, setValues] = useState({
      title: "",
      category: "",
      experience: "",
      location: "",
      salary: "",
      description: "",
      abilities: initialState
   })

   function handleAbilites(e) {
      value = parseInt(e.target.value);
      let equal;

      if (values.abilities.length === 0) {
         setValues(values => ({
            ...values,
            abilities: [value]
         }))
      } else {
         values.abilities.forEach(element => {
            if (element === value) {
               equal = true;
            }
         });

         if (equal !== undefined) {
            setValues(values => ({
               ...values,
               abilities: values.abilities.filter(item => item !== value)
            }))
         } else {
            setValues(values => ({
               ...values,
               abilities: [...values.abilities, value]
            }))
         }
      }
   }

   function handleChange(e) {
      const key = e.target.id;
      const value = e.target.value
      setValues(values => ({
         ...values,
         [key]: value,
      }))
   }

   function handleSubmit(e) {
      e.preventDefault()
      console.log(values);
      router.post(url, values)
   }

   return (
      <Fragment>
         <AuthNavbar name={me.name} />
         <div style={{ minHeight: "89vh", backgroundColor: "#d9e0e4" }} className="d-flex justify-content-center">
            <div className='col-4'>
               <h1 className='h3 text-center'>Nueva Vacante</h1>
               <form onSubmit={handleSubmit}>
                  <label htmlFor="title" className='form-label'>Título Vacante:</label>
                  <input type="text" required className='form-control border-none rounded-2 mb-3' placeholder='Título de la vacante' name='title' id='title' onChange={handleChange} />

                  <label htmlFor="category" className='form-label'>Categoría:</label>
                  <select name="category" id="category" defaultValue={""} required className="form-control mb-3" onChange={handleChange}>
                     <option value="" disabled>-Selecciona-</option>
                     {categories.map((obj) => {
                        return (
                           <option key={obj.id} value={obj.id}>{obj.category}</option>
                        )
                     })}
                  </select>

                  <label htmlFor="experience" className='form-label'>Experiencia:</label>
                  <select name="experience" id="experience" defaultValue={""} required className="form-control mb-3" onChange={handleChange}>
                     <option value="" disabled>-Selecciona-</option>
                     {experiences.map((obj) => {
                        return (
                           <option key={obj.id} value={obj.id}>{obj.experience}</option>
                        )
                     })}
                  </select>

                  <label htmlFor="location" className='form-label'>Ubicación:</label>
                  <select name="location" id="location" defaultValue={""} required className="form-control mb-3" onChange={handleChange}>
                     <option value="" disabled>-Selecciona-</option>
                     {locations.map((obj) => {
                        return (
                           <option key={obj.id} value={obj.id}>{obj.location}</option>
                        )
                     })}
                  </select>

                  <label htmlFor="salary" className='form-label'>Salario:</label>
                  <select name="salary" id="salary" defaultValue={""} required className="form-control mb-3" onChange={handleChange}>
                     <option value="" disabled>-Selecciona-</option>
                     {salaries.map((obj) => {
                        return (
                           <option key={obj.id} value={obj.id}>{obj.salary}</option>
                        )
                     })}
                  </select>

                  <label htmlFor="description" className='form-label'>Descripción del Puesto:</label>
                  <textarea name="description" id="description" cols="30" rows="10" placeholder='Información de la vacante' className='form-control mb-3' onChange={handleChange}></textarea>

                  <label htmlFor="image" className='form-label'>Imagen Vacante:</label>
                  <input className='form-control mb-3' type="file" name='image' id='image' />

                  <label htmlFor="abilitities" className='form-label'>Habilidades y Conocimientos: (Elige al menos 3)</label>

                  <div className='mb-3 d-flex flex-wrap justify-content-center gap-2'>
                     {abilities.map((obj) => {
                        return (
                           <button key={obj.id} value={obj.id} className='buttonAbility' role="button" data-bs-toggle="button" onClick={handleAbilites}>{obj.ability}</button>
                        )
                     })}
                  </div>
                  <button type="submit" className='btn rounded-1 col-12 text-white fw-bold mb-5' style={{ backgroundColor: "#4eb4a7", paddingTop: ".5rem", paddingBottom: ".5rem" }}>PUBLICAR VACANTE</button>
               </form>
            </div>
         </div>
      </Fragment>
   )
}
