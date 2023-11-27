import { Container, Form } from "react-bootstrap";

const PacientCreate = () => {
    return (
        <div>
               <Container className="py-5">
        <h1>Add Pacient🐾</h1>
        <hr />
        {/* Form Pacient */}
        <Form className="my-5" /* onSubmit={handleSubmit} */>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Owner name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Pepe Argento"
              name="ownerName"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: pepeargento@gmail.com"
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tel*</Form.Label>
            <Form.Control
              type="text"
              name="tel"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Pet Name*</Form.Label>
            <Form.Control
              type="text"
              name="petName"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Specie*</Form.Label>
            <Form.Control
              type="text"
              name="specie"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>race*</Form.Label>
            <Form.Control
              type="text"
              name="race"
            />
          </Form.Group>
          <div className="text-end">
            <button className="btn-yellow">Save</button>
          </div>
        </Form>
    
      </Container>
    </div>
    );
};

export default PacientCreate;