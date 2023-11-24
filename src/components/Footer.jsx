// components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
    <Container>
      <Row>
        <Col md={6}>
          <h4>Redes Sociales</h4>
          {/* Agrega enlaces o iconos de redes sociales según sea necesario */}
        </Col>
        <Col md={3}>
          <h4>Información de Contacto</h4>
          <p>Dirección: [Dirección de la Veterinaria]</p>
          <p>Teléfono: [Número de Teléfono]</p>
          {/* Agrega más información de contacto según sea necesario */}
        </Col>
        <Col md={3}>
          <h4>Enlaces Útiles</h4>
          {/* Agrega enlaces útiles, como términos y condiciones, política de privacidad, etc. */}
        </Col>
      </Row>
    </Container>
  </footer>
  );
};

export default Footer;
