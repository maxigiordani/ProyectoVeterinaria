import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/">Mi Veterinaria</Navbar.Brand>
      {/* Aquí puedes agregar otros elementos de navegación si es necesario */}
    </Navbar>
  );
};

export default NavComponent;
