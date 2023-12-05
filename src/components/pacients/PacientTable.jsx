/* eslint-disable react/prop-types */
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pacients from "./Pacients";
import "../../App.css";
import { BsPersonPlus } from "react-icons/bs";

const PacientTable = ({ pacients, getAPI }) => {
  console.log(pacients);

  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Tabla de pacientes</h1>
          <Link
            to="/pacient/create"
            className=" btn btn-violeta text-decoration-none text-center"
          >
            Agregar pacientes <BsPersonPlus className="m-2" />
          </Link>
        </div>
        <hr />
        {/* Table of PACIENTS */}
        {pacients?.length !== 0 ? (
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre apellido dueño</th>
                <th>Email</th>
                <th>Tel</th>
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
            <h1>🐾 No se encontraron pacientes 🥲 🐾</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default PacientTable;
