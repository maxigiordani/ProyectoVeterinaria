import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageAdmin = () => {
  return (
    <Container>
      <h1 className="display-4 text-center mt-3">
        Bienvenido a la página de administración
      </h1>
      <p className="text-center lead mt-4">Versión del Sistema: 1.0.0</p>
      <hr />
      <Row className="justify-content-center text-center mt-4">
        <Col xl={6} lg={6} md={6} sm={12}>
          <Link
            to={"/admin/pacientes"}
            className="btn btn-violeta text-center mt-2"
          >
            Administración Pacientes
          </Link>
        </Col>
        <Col xl={6} lg={6} md={6} sm={12}>
          <Link
            to={"/admin/turnos"}
            className="btn btn-violeta text-center  mt-2"
          >
            Administración Turnos
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PageAdmin;
