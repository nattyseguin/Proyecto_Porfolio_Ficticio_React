import React from 'react';
import { Link } from 'react-router-dom';
import { trabajos } from '../../data/trabajos';

export const ListadoTrabajos = ({limite}) => {
  return (
    <div className='page'>
    <section className='works'>
    {
     
     // el slice recoge el limite que se pasa por parametro, por lo que muestra hasta ese nuero de proyecto solo en la pantalla de inicio
      trabajos.slice(0,limite).map(trabajo =>(/* si se pone parentesis aqui, hace un return automatico, si se pone {} no hace return */
      
        <article key={trabajo.id} className="work-item">
          <div className='mask'>
        <img src={"/images/"+trabajo.id+".png"}/>

          </div>
        <span>{trabajo.categorias}</span>
        <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
        <h3>{trabajo.tecnologias}</h3>
      </article>
      ))
        
    }
    </section>


    </div>
  )
}