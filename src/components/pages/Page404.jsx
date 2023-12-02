import React from 'react';
import imagen from './../../assets/imagenes/error404.jpg'

const Page404 = () => {
  return (

      <div className="container  fluid d-flex justify-content-center flex-column">
        <h1 className="mt-5 text-center ">Error 404- Página no encontrada</h1>
        <img src={imagen} alt="Error404" />
    
      </div>
  
  );
};

export default Page404;