import React from 'react';
import imagen from './../../assets/imagenes/bannerdog.jpg'
const Pageunauthorized = () => {
  return (

      <div className="container  fluid d-flex justify-content-center flex-column estilotabla">
        <h1 className="mt-5 text-center h1 "> Atención : Para poder ver el contenido debe loguearse como administrador.</h1>
       <img src={imagen} alt="Error404" />
      </div>
  
  );
};

export default Pageunauthorized;