import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>
      <section className='services'>
        <article className='service'>
          <h2>Diseño web</h2>
          <p>Diseño tu pagina para que sea bonita</p>
        </article>

        <article className='service'>
          <h2>Desarrollo web</h2>
          <p>Preparo la pagina desde cero</p>
        </article>


        <article className='service'>
          <h2>Posicionamiento web</h2>
          <p>Hago que la pagina aparezca la primera en las busquedas de Google</p>
        </article>
      </section>
    </div>
  )
}
