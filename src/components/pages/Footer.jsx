
import React from 'react';
import '/src/App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        {/* Agrega tus iconos o enlaces de redes sociales aquí */}
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        {/* Agrega más redes sociales según sea necesario */}
      </div>
      <div className="contact-info">
        <p>Ubicación: Tu dirección</p>
        <p>Teléfono: Tu número de teléfono</p>
        {/* Agrega más información de contacto según sea necesario */}
      </div>
      <div className="extra-info">
        {/* Agrega información adicional según sea necesario */}
      </div>
    </footer>
  );
};

export default Footer;