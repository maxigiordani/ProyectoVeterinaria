import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/imagenes/LOGO1.png';

const NavbarComponent = () => {
  return (
    <Navbar bg="" expand="lg" className='navbarstyle'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo de la Empresa"
            height="30"
            className ="d-inline-block align-top logounico"
          />{' '}
          <h3 className='titulonav h3'>VETERINARIA ROLLING</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='botonnav'/>
        <Navbar.Collapse id="basic-navbar-nav">
    
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/ContactUs">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
