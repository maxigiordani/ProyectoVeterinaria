import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TfiAgenda } from "react-icons/tfi";
import "../../App.css";
import Appointments from "./Appointments";

const AppointmentTable = ({ appointments, getTurnosAPI }) => {
  return (
    <div className="estilotabla">
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Tabla de Turnos</h1>
          <Link
            to="/turnos/create"
            className=" btn btn-violeta text-decoration-none text-center"
          >
            Agregar Turno
            <TfiAgenda className="m-2" />
          </Link>
        </div>
        <hr />
        {appointments?.length !== 0 ? (
          <Table
            bordered
            hover
            responsive
            className="align-middle mt-3 text-center"
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Detalles del turno</th>
                <th>Veterinario</th>
                <th>Mascota</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map((appointment) => (
                <Appointments
                  key={appointment._id}
                  appointments={appointment}
                  getTurnosAPI={getTurnosAPI}
                />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1>📆No se encontraron turnos📆</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AppointmentTable;
