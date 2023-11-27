import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const PacientTable = () => {
    return (
     <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Pacients Table</h1>
          <Link
            to="/pacient-create"
            className="btn-red text-decoration-none text-center"
          >
            Add Pacient
          </Link>
        </div>
        <hr />
        {/* Table of PACIENTS */}
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Owner Name</th>
                <th>Email</th>
                <th>Tel</th>
                <th>Pet Name</th>
                <th>Specie</th>
                <th>Race</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
           
            </tbody>
          </Table>
     
          <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1> 🐾 No pacients found 🐾</h1>
          </div>
      </Container>

        </div>
    );
};

export default PacientTable;