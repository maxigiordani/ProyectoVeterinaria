import React from "react";
import { Container, Row, Col, Card, Button, Carousel, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import WeatherWidget from "../helpers/WeatherWidget";
import publicidadImage from "../../assets/imagenes/principal.jpg";

const MainPage = () => {
  return (
    <div className="principal">
      <div className="container fluid tiempo text-center ms-auto">
        <WeatherWidget />
      </div>

      <Container fluid>
        <div className="fondo-container img-fluid ">
          <h1 className="tituloprincipal fluid ">VETERINARIA ROLLING</h1>
        </div>

        <br />

        <div className="container servicios text-center">
          <h2 className="text-center h3">Ofrecemos una amplia variedad de productos y servicios</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <ListGroup className="listgroup-services">
                <Link className="linkstyle" to="/page404">
                  <ListGroup.Item className="listaservicios">Cirugías </ListGroup.Item>
                </Link>
                <Link className="linkstyle" to="/page404">
                  <ListGroup.Item className="listaservicios">Ecografías </ListGroup.Item>
                </Link>
                <Link className="linkstyle" to="/page404">
                  <ListGroup.Item className="listaservicios">Aplicación y venta de vacunas </ListGroup.Item>
                </Link>
                <Link className="linkstyle" to="/page404">
                  <ListGroup.Item className="listaservicios">Radiografías </ListGroup.Item>
                </Link>
                <Link className="linkstyle" to="/page404">
                  <ListGroup.Item className="listaservicios">Laboratorio de análisis </ListGroup.Item>
                </Link>
                <Link className="linkstyle" to="/page404">
                  <ListGroup.Item className="listaservicios">Accesorios para tu mascota </ListGroup.Item>
                </Link>
                <Link className="linkstyle" to="/page404">
                  <ListGroup.Item className="listaservicios">Alimentos balanceados de varias marcas </ListGroup.Item>
                </Link>
                <Link className="linkstyle" to="/page404">
                  <ListGroup.Item className="listaservicios">Venta de medicamentos </ListGroup.Item>
                </Link>
                <Link className="linkstyle" to="/page404">
                  <ListGroup.Item className="listaservicios">Peluquería </ListGroup.Item>
                </Link>
              </ListGroup>
            </Col>
          </Row>
        </div>

        <Col className="publicidad-horizontal text-center d-none d-lg-block">
          <img src={publicidadImage} alt="Publicidad2" />
        </Col>

        <div className="container">
          <Row className="mt-4">
            <Col>
              <h3 className="text-center h3">Nuestros Profesionales</h3>
              <Container className="container fluid text-center">
                <Card className="cardprof">
                  <Card.Body>
                    <Card.Title>Vet. Marcelo Gomez</Card.Title>
                    <Card.Text>Especialista en fauna silvestre, cuenta con más de diez años de experiencia al servicio del cuidado de los animales</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="cardprof">
                  <Card.Body>
                    <Card.Title>Vet. Laura Ramirez</Card.Title>
                    <Card.Text>Especialista en cirugía general, tiene más de 15 años realizando intervenciones de diferentes tipos.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="cardprof">
                  <Card.Body>
                    <Card.Title>Vet. Mateo Gordon</Card.Title>
                    <Card.Text>Especialista en oncología, trabaja hace 5 años en nuestra veterinaria.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="cardprof">
                  <Card.Body>
                    <Card.Title>Vet. Camila Herrera</Card.Title>
                    <Card.Text>Especialista en rehabilitación animal.</Card.Text>
                  </Card.Body>
                </Card>
              </Container>
            </Col>
          </Row>
        </div>

        <div className="container">
          <Row>          
              <h3 className="text-center h3">Comentarios de Nuestros Clientes</h3>
            <Col>
              <Carousel className="carousel text-center">
                <Carousel.Item>
                  <Card className="comentscustomer">
                    <Card.Body>
                      <Card.Text>
                        "Excelente servicio, siempre confío en la veterinaria
                        Rolling para el cuidado de mis mascotas."
                      </Card.Text>
                      <p className="cliente">- María Pérez</p>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="comentscustomer">
                    <Card.Body>
                      <Card.Text>
                        "Los profesionales de la veterinaria son muy dedicados.
                        Mi perro siempre recibe la mejor atención aquí."
                      </Card.Text>
                      <p className="cliente">- Juan Rodríguez</p>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="comentscustomer">
                    <Card.Body>
                      <Card.Text>
                        "Excelente atención, muy buenos precios y contencion al
                        cliente."
                      </Card.Text>
                      <p className="cliente">- Carlos Giovanni</p>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="comentscustomer">
                    <Card.Body>
                      <Card.Text>
                        "Rapida atención, excelente trato y precios accesibles."
                      </Card.Text>
                      <p className="cliente">-Valentina Mamani</p>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </div>
<br />

        <div className="container justify-content-center">
          <Row className="text-center">
            <h3 className="text-center h3">En veterinaria tenemos diferentes planes de acuerdo a tus necesidades:</h3>
            <Row className="estilocards text-center">
              <Col md={4} sm={6}>
                <Card className="cardplanes text-center">
                  <Card.Body>
                    <Card.Title>Primeros Pasos</Card.Title>
                    <Card.Text>Servicios para mascotas de 0 a 5 años.</Card.Text>
                    <Link to="/planes/primeros-pasos">
                      <Button variant="primary">Detalles</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} sm={6}>
                <Card className="cardplanes">
                  <Card.Body>
                    <Card.Title>Madurando</Card.Title>
                    <Card.Text>Servicios para mascotas de 5 a 10 años.</Card.Text>
                    <Link to="/planes/madurando">
                      <Button variant="primary">Detalles</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} sm={6}>
                <Card className="cardplanes">
                  <Card.Body>
                    <Card.Title>Adultos</Card.Title>
                    <Card.Text>Servicios para mascotas de más de 10 años.</Card.Text>
                    <Link to="/planes/adultos">
                      <Button variant="primary">Detalles</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
