import React, { useState } from 'react';
import { admin } from '../components/helpers/Credintals'; // Ajusta la ruta según la estructura de tu proyecto
import bcrypt from 'bcryptjs'; // Importa bcrypt para comparar contraseñas
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import imagen from '../assets/imagenes/bannerlogin.jpg';
import Swal from 'sweetalert2';
const PageLogin = () => {
    // Estados para manejar la entrada del usuario
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
  
    // Función para manejar el intento de inicio de sesión
    const handleLogin = async () => {
      // Compara la contraseña ingresada con el hash almacenado
      const passwordMatch = await bcrypt.compare(passwordInput, admin.passwordHash);
  
      if (passwordMatch) {
        console.log('Inicio de sesión exitoso como administrador');
         alert("correcto")
        // Lógica para redirigir al usuario después de iniciar sesión
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las credenciales ingresadas son incorrectas",
        });
      }
      setUsernameInput('');
      setPasswordInput('');
    };
  
    return (
      <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Iniciar Sesión</h2>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Usuario:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su usuario"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
            </Form.Group>
            <Button className='botonlogin' variant="primary" onClick={handleLogin}>
            Ingresar
            </Button>
          </Form>
          <img
            src= {imagen}
            alt="Imagen debajo del formulario"
            className="img-fluid mt-3" // La clase img-fluid hace que la imagen sea responsive
          />
        </Col>
      </Row>
    </Container>
    );
  };
export default PageLogin;
