
import '/src/App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Redes Sociales</h5>
            {/* Agrega tus enlaces de redes sociales aquí */}
          </Col>
          <Col md={3}>
            <h5>Ubicación</h5>
            <p>Tu dirección aquí</p>
          </Col>
          <Col md={3}>
            <h5>Contacto</h5>
            <p>Teléfono: Tu número de teléfono aquí</p>
            {/* Puedes agregar más información de contacto si es necesario */}
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-secondary">
        {/* Información adicional o créditos aquí */}
        © {new Date().getFullYear()} Tu Veterinaria
      </div>
    </footer>
  );
};

export default Footer;
