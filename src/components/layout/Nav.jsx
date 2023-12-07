import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/imagenes/logouno.png";

const NavbarComponent = ({ isAdmin }) => {
  const location = useLocation();

  const isSmallScreen = () => window.innerWidth <= 768;

  return (
    <Navbar bg="" expand="lg" className="navbarstyle">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo de la Empresa"
            height="30"
            className="d-inline-block align-top logounico"
          />
          <h3 className="titulonav h3">VETERINARIA ROLLING</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="botonnav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAdmin && !isSmallScreen() && ( 
              (location.pathname.startsWith("/admin") ||
                location.pathname === "/pageadmin" ||
                location.pathname === "/pacient/create" ||
                location.pathname === "/turnos/create") && (
                <>
                  <Nav.Link className="linkadm" as={Link} to="pageadmin">
                    ADMINISTRADOR
                  </Nav.Link>
                  <Nav.Link className="linkadm" as={Link} to="admin/pacientes">
                    ADMINISTRAR PACIENTES
                  </Nav.Link>
                  <Nav.Link className="linkadm" as={Link} to="admin/turnos">
                    ADMINISTRAR TURNOS
                  </Nav.Link>
                </>
              )
            )}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className="linknav" as={Link} to="/">
              INICIO
            </Nav.Link>
            <Nav.Link className="linknav" as={Link} to="/pagelogin">
              INGRESAR
            </Nav.Link>
            <Nav.Link className="linknav" as={Link} to="/contactus">
              CONTÁCTENOS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
