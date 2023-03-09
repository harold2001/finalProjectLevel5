import NavBar from '@/Components/NavBar';
import { router, useForm } from '@inertiajs/react';
import React, { Fragment, useState } from 'react';
import image from "../../../assets/office.jpg";

export default function Home({ categorias, ubicaciones, url, user }) {
   const { post, put } = useForm();

   const [values, setValues] = useState({
      category: "",
      location: "",
   })

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
      // console.log(values);
      router.get(url, values)
   }

   return (
      <Fragment>
         <NavBar data={user}/>
         <div style={{ height: "89vh", backgroundColor: "#d9e0e4" }} className="d-flex justify-content-center align-items-center">
            <div style={{ backgroundColor: "#ededed", height: "80%" }} className="d-flex justify-content-between align-items-center col-lg-8">
               <div className='d-flex flex-column justify-content-center col-6 gap-3 px-4' style={{ height: "100%" }}>
                  {/* <div> */}
                  <p className='h4'>dev<strong>Jobs</strong></p>
                  <p className='h4'><strong>Encuentra un trabajo remoto o en tu país</strong></p>
                  <p style={{ color: "#249890" }} className='h4'><strong>Para Desarrolladores / Diseñadores Web</strong></p>
                  <p className='h5'>Busca una vacante</p>

                  <form onSubmit={handleSubmit} >
                     <label htmlFor="category" className='form-label'>Categoría:</label>
                     <select name="category" id="category" className='form-control' defaultValue="" onChange={handleChange}>
                        <option value="" disabled>- Selecciona -</option>
                        {categorias.map((obj) => {
                           return (
                              <option key={obj.id} value={obj.id}>{obj.category}</option>
                           );
                        })}
                     </select>

                     <label htmlFor="location" className='form-label'>Ubicación:</label>
                     <select name="location" id="location" className='form-control' defaultValue="" onChange={handleChange}>
                        <option value="" disabled>- Selecciona -</option>
                        {ubicaciones.map((obj) => {
                           return (
                              <option key={obj.id} value={obj.id}>{obj.location}</option>
                           );
                        })}
                     </select>
                     <button type="submit" className='btn btn-success bg-success rounded-0 col-12 mt-4 '>BUSCAR VACANTES</button>
                  </form>
                  {/* </div> */}
               </div>
               <div className='col-6' style={{ height: "100%" }}>
                  <img src={image} alt="Imagen" className='col-12' style={{ height: "100%", overflow: "hidden", objectFit: "cover" }} />
               </div>
            </div>
         </div>
      </Fragment>
   )
}
