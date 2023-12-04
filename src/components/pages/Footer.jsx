import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/imagenes/logo1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className='text-center'>
        <Row className="justify-content-center">
          {/* Primera columna con el logo y derechos reservados */}
          <Col md={6} lg={3}>
            <img
              src={logo}
              alt="Logo de la Empresa"
              className="d-inline-block align-top logofooter"
            />
            <p className=" mb-2">© 2023 Todos los derechos reservados</p>
          </Col>

          {/* Segunda columna con enlaces "Nosotros" */}
          <Col md={6} lg={3}>
            <h5>Nosotros</h5>
            <ul className="list-unstyled">
              <li><a className='linkfooter' href="/">INICIO</a></li>
              <li><a className='linkfooter' href="/aboutus">ACERCA DE NOSOTROS</a></li>
              <li><a className='linkfooter' href="/contactus">CONTÁCTENOS</a></li>
            </ul>
          </Col>

          {/* Tercera columna con enlaces a redes sociales */}
          <Col md={6} lg={3} >
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li><a className='linkfooter' href="https://facebook.com">FACEBOOK</a></li>
              <li><a className='linkfooter' href="https://instagram.com">INSTAGRAM</a></li>
              <li><a className='linkfooter' href="https://twitter.com">X</a></li>
            </ul>
          </Col>

          {/* Cuarta columna de contacto */}
          <Col md={6} lg={3} >
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li className='linkfooter'  >TELEFÓNO: (381) 456-7850</li>
              <li className='linkfooter'>EMAIL: veternariarolling23@gmail.com</li>
              <li className='linkfooter'>WHATSAPP: +5493814238444</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
