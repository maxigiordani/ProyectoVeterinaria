
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Ubicación: Tu dirección aquí</p>
          <p>Teléfono: Tu número de teléfono aquí</p>
        </div>
        <div className="social-media">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          {/* Agrega más redes sociales según sea necesario */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
