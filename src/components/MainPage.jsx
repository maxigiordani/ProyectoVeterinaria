// components/MainPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const MainPage = () => {
  
  return (
    
      <Container fluid>
        <div className="fondo-container">
          <h1 className='display tituloprincipal'>Veterinaria Rolling</h1>
        </div>

 <br/>

      {/* Sección de Servicios, Productos y Marcas */}
      <div className="servicios">
        <h2 className='text-center'>Ofrecemos una amplia variedad de servicios</h2>
      </div>

      <div className='container divservices'>
        <Row>
          <Col className='servicesandproduct'>
            <Card className='cardservice'>
              <Card.Body>
                <Card.Title>Operaciones</Card.Title>
              </Card.Body>
            </Card>
            
            <Card className='cardservice'>
              <Card.Body>
                <Card.Title>Ecografías</Card.Title>
              </Card.Body>
            </Card>
          
            <Card className='cardservice'>
              <Card.Body>
                <Card.Title>Aplicación y venta de vacunas</Card.Title>
              </Card.Body>
            </Card>
     
            <Card className='cardservice'>
              <Card.Body>
                <Card.Title>Radiografías</Card.Title>
              </Card.Body>
            </Card>
     
            <Card className='cardservice'>
              <Card.Body>
                <Card.Title>Laboratorio de análisis</Card.Title>
              </Card.Body>
            </Card>

            <Card className='cardservice'>
              <Card.Body>
                <Card.Title>Accesorios para tu mascota</Card.Title>
              </Card.Body>
            </Card>
            <Card className='cardservice'>
              <Card.Body>
                <Card.Title>Alimentos balanceados de varias marcas</Card.Title>
              </Card.Body>
            </Card>
            <Card className='cardservice'>
              <Card.Body>
                <Card.Title>Venta de medicamentos</Card.Title>
              </Card.Body>
            </Card>

            <Card className='cardservice'>
              <Card.Body>
                <Card.Title>Peluqueria</Card.Title>
              </Card.Body>
            </Card>
     


            {/* Agrega más tarjetas de planes según sea necesario */}
          </Col>
        </Row>
      </div>
      {/* Sección de Comentarios de Clientes */}
      <Row className="mt-4">
        <Col>
          <h3 className='text-center'>Comentarios de Nuestros Clientes</h3>
          {/* Agrega un componente de comentarios de clientes si es necesario */}
        </Col>
      </Row>

      {/* Sección de Profesionales */}
      <Row className="mt-4">
        <Col>
          <h3 className='text-center' >Nuestros Profesionales</h3>
          <h5 className='text-center'>
            En nuestra veterinaria contamos con los siguientes profesionales
          </h5>
          <Container>
            <Card>
              <Card.Body>
                <Card.Title>Vet. Marcelo Gomez</Card.Title>
                <Card.Text>
                  Especialista en fauna silvestre, cuenta con más de diez años de experiencia al servicio del cuidado de los animales
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Vet. Laura Ramirez</Card.Title>
                <Card.Text>
                  Especialista en cirugía general, tiene más de 15 años realizando intervenciones de diferentes tipos.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Vet. Mateo Gordon</Card.Title>
                <Card.Text>
                  Especialista en oncología, trabaja hace 5 años en nuestra veterinaria.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Vet. Camila Herrera</Card.Title>
                <Card.Text>
                  Especialista en rehabilitación animal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>

      {/* Sección de Planes Especiales */}
      <div>
        <h2 className='text-center'>En veterinaria tenemos diferentes planes de acuerdo a tus necesidades:</h2>
      </div>
      <div className='container planes'>
        <Row>
          <Col className='estilocards'>
            <Card className='cardplanes'>
              <Card.Body>
                <Card.Title>Primeros Pasos</Card.Title>
                <Card.Text>
                  Servicios para mascotas de 0 a 5 años.
                </Card.Text>
                <Link to="/planes/primeros-pasos">
                  <Button variant="primary">Detalles</Button>
                </Link>
              </Card.Body>
            </Card>
            <Card className='cardplanes'>
              <Card.Body>
                <Card.Title>Madurando</Card.Title>
                <Card.Text>
                  Servicios para mascotas de 5 a 10 años.
                </Card.Text>
                <Link to="/planes/madurando">
                  <Button variant="primary">Detalles</Button>
                </Link>
              </Card.Body>
            </Card>
            <Card className='cardplanes'>
              <Card.Body>
                <Card.Title>Adultos</Card.Title>
                <Card.Text>
                  Servicios para mascotas de más de 10 años.
                </Card.Text>
                <Link to="/planes/adultos">
                  <Button variant="primary">Detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MainPage;
