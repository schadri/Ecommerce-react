import React from 'react'
import "./ban.css"
import { scrollToId } from '../../helpers/scrollToId'
export const Ban = () => {
  return (
    <div>
      <header style={{ paddingLeft: 0 }}>
    <div className='p-5 text-center bg-image' id='hero'>
  
      <div className='mask' >
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3' id='winter'>Winter Store</h1>
            <h4 className='mb-3' id='cool'>Le damos una fria bienvenida a nuestra tienda</h4>
            <button className='btn btn-outline-light btn-lg' id='button-ref' onClick={()=>scrollToId('NP')}>
              Ver Productos
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  </div>
  )
}




