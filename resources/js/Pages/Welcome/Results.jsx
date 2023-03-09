import NavBar from '@/Components/NavBar'
import { Link } from '@inertiajs/react';
import React, { Fragment } from 'react'

function NoData() {
  return (
    <Fragment>
      <p className='h4'>No hay resultados para esta búsqueda </p>
    </Fragment>
  );
}

function SiData({ props }) {
  // console.log(props.data[7].active);
  return (
    <Fragment>
      {props.data.map((obj) => {
        if (obj.active === 1) {
          return (
            <div className='card rounded-0 col-lg-5 ' key={obj.id}>
              <div className="card-body">
                <h5 className="card-title fw-bold h4" style={{ color: "#24988f" }}>{obj.title}</h5>
                <p>{obj.category_name.category}</p>
                <p className="card-text">Ubicación: <strong>{obj.location_name.location}</strong></p>
                <p className="card-text">Experiencia: <strong>{obj.experience_name.experience}</strong></p>
                <Link href={route("vacancies_index")} method="get" data={{ id: obj.id }} className="btn btn-success mt-2">Ver vacante</Link>
              </div>
            </div>
          )
        }
      })}
    </Fragment>
  );
}

export default function Results({ data, category, location }) {
  // console.log(data);
  // console.log(category);
  // console.log(location);
  return (
    <Fragment>
      <NavBar />
      <div style={{ minHeight: "89vh", backgroundColor: "#d9e0e4" }}>
        <div className='container d-flex justify-content-center' style={{ height: "100%" }}>
          <div className='col-10 d-flex align-items-center flex-column gap-3 p-4'>
            {location === null ? "" : (<h1 className='h3 align-self-start mt-4'>Resultados de la búsqueda</h1>)}
            <div className='col-12 d-flex flex-wrap justify-content-center align-items-center py-4 gap-4' style={{ backgroundColor: "#ededed" }}>
              {((category !== null) && (location === null)) ? (<h1 className='h3 align-self-start mt-4 col-10'>Categoría: <strong>{data.data[0].category_name.category}</strong></h1>) : ""}
              {data.data.length === 0 ? <NoData /> : <SiData props={data} />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
