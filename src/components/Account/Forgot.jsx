// import React from 'react'

// export const Forgot = () => {
//   return (
//     <div>
//         <h1>EN DESARROLLO</h1>
        
//     </div>
//   )
// }

import React, {useEffect } from 'react';
import "./forgot.css"

const RedirectComponent = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.replace('/login')
    }, 5000);

  }, []);

  return (
    <div>
      <h1 className='titulo text-center my-5'>Esto sigue en desarrollo</h1>
      <h2 className='subtitulo text-center '>Redirección en 5 segundos...</h2>
    </div>
  );
};

export default RedirectComponent;




