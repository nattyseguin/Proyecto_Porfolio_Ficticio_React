import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../../data/trabajos';

export const Proyecto = () => {

    const [proyecto,setProyecto] = useState({});
    const params = useParams();

    useEffect(()=>{
        let proyecto =trabajos.filter(trabajo => trabajo.id === params.id); //recojo ese array con un elemento que tenga el mismo id que el que se recoge por parametros
   
        setProyecto(proyecto[0]); //asi cojo solo un valor 
    },[]);


  return (
    <div className='page page-work'>
        <div className='mask'>
        <img src={"/images/"+proyecto.id+".png"}/>
   </div>
    <h1 className='heading'>{proyecto.nombre}</h1>
    <p>{proyecto.tecnologias}</p>
    <p>{proyecto.descripcion}</p>
    <a href={"https://"+proyecto.url} target="_blank">Ir al proyecto</a> {/** el target sirve para que lo abra en una pestaña nueva */}

  
  </div>
  )
}