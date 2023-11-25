import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/imagenes/LOGO1.png'; 

const NavbarComponent = ({ isAdmin }) => {
  return (
    <Navbar bg="" expand="lg" className='navbarstyle'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo de la Empresa"
            height="30"
            className ="d-inline-block align-top logounico"
          />
          VETERINARIA ROLLING
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAdmin && (
              <>
                <Nav.Link as={Link} to="/admin-pacientes">Administrar Pacientes</Nav.Link>
                <Nav.Link as={Link} to="/admin-turnos">Administrar Turnos</Nav.Link>
              </>
            )}
          
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;