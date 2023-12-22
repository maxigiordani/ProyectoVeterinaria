import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pacients from "./Pacients";
import "../../App.css";
import { BsPersonPlus } from "react-icons/bs";

const PacientTable = ({ pacients, getAPI }) => {


  return (
    <div className="estilotabla">
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Tabla de Pacientes</h1>
          <Link
            to="/pacient/create"
            className=" btn btn-violeta text-decoration-none text-center"
          >
            Agregar Paciente
            <BsPersonPlus className="m-2" />
          </Link>
        </div>
        <hr />

        {pacients?.length !== 0 ? (
          <Table
            bordered
            hover
            responsive
            className="align-middle mt-3 text-center"
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre y apellido </th>
                <th>Email</th>
                <th>Telefóno</th>
                <th>Nombre mascota</th>
                <th>Especie</th>
                <th>Raza</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pacients?.map((pacient) => (
                <Pacients
                  key={pacient._id}
                  pacients={pacient}
                  getAPI={getAPI}
                />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1>🐾 No se encontraron pacientes🐾</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default PacientTable;
