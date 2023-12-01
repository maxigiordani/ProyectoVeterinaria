import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageAdmin = () => {
  return (
    <Container>
      <h1 className="display-4 text-center mt-3">
        Bienvenido a la página de administración
      </h1>
      <p className="text-center lead mt-4">Versión del Sistema: 1.0.0</p>
      <hr />
      <Row className="justify-content-center text-center my-3">
        <Col xl={6} lg={6} md={6} sm={12}>
        <Card className="mx-5">
      <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/propietario-cerca-lindo-perro_23-2149143856.jpg?w=900&t=st=1701344682~exp=1701345282~hmac=34efa45c0d22e1f64fc814e3cc9372946bff3de08d81bc54696304f5368bd296" />
        <Link
            to={"/admin/pacientes"}
            className="btn btn-violeta text-center mt-2"
          >
            Administración Pacientes
          </Link>
    </Card>

          
        </Col>
        <Col xl={6} lg={6} md={6} sm={12}>
        <Card className="mx-5">
      <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/lindo-perro-consulta_23-2149314384.jpg?w=900&t=st=1701344918~exp=1701345518~hmac=bec033b3e5ee999294964b28a497ce56d68c09d6a3c7ffd33528ae4bdfdde9f2" />
      <Link
            to={"/admin/turnos"}
            className="btn btn-violeta text-center  mt-2"
          >
            Administración Turnos
          </Link>
    </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PageAdmin;