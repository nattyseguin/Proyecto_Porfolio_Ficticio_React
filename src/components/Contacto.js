import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:nataliaseguin@gmail.com'>
      <input type="text" placeholder='nombre'/>
      <input type="text" placeholder='apellidos'/>
      <input type="text" placeholder='email'/>
      <textarea  placeholder='Motivo de contacto'/>
      <input type="submit" value='enviar'/>

      </form>
      </div>
  )
}
