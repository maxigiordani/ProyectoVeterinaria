/* eslint-disable react/prop-types */
import { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../config/axiosInit";
import {
  validateEmail,
  validateNames,
  validateTel,
} from "../helpers/validateFieldCreate";

const PacientCreate = ({ getAPI }) => {
  const [inputs, setInputs] = useState({});
  const [errorMessage,  setErrorMessage] = useState(null);
  const [show, setShow] = useState(false);

  const URL = import.meta.env.VITE_API_VETERINARIA;
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !validateNames(inputs.ownerName) ||
      !validateEmail(inputs.email) ||
      !validateTel(inputs.tel) ||
      !validateNames(inputs.petName) ||
      !validateNames(inputs.specie) ||
      !validateNames(inputs.race)
    ) {
      Swal.fire("Oops!", "Some data is invalid", "error");
      return;
    }

    const newPacient = {
      ownerName: inputs.ownerName,
      email: inputs.email,
      tel: inputs.tel,
      petName: inputs.petName,
      specie: inputs.specie,
      race: inputs.race,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Save!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(URL, newPacient);
          console.log(res);
          if (res.status === 201) {
            Swal.fire(
              "Created",
              "Your patient has been created successfully",
              "success"
            );
            e.target.reset();
            getAPI();
            navigate("/admin/pacientes");
          }
        } catch (error) {
          console.log(error);
          error.response.data?.message &&
             setErrorMessage(error.response.data?.message);
          error.response.data?.errors?.length > 0 &&
             error.response.data.errors?.map((error) =>
                setErrorMessage(error.msg)
             );
        }
      }
    });
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Add Pacient🐾</h1>
        <hr />
        {/* Form Pacient */}
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formOwnerName">
            <Form.Label>Owner name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Pepe Argento"
              name="ownerName"
              value={inputs.ownerName || ""}
              onChange={(e) => handleChange(e)}
              maxLength={30}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: pepeargento@gmail.com"
              name="email"
              value={inputs.email || ""}
              onChange={(e) => handleChange(e)}
              maxLength={30}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTel">
            <Form.Label>Tel*</Form.Label>
            <Form.Control
              type="text"
              name="tel"
              value={inputs.tel || ""}
              onChange={(e) => handleChange(e)}
              maxLength={12}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPetName">
            <Form.Label>Pet Name*</Form.Label>
            <Form.Control
              type="text"
              name="petName"
              value={inputs.petName || ""}
              onChange={(e) => handleChange(e)}
            maxLength={30}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSpecie">
            <Form.Label>Specie*</Form.Label>
            <Form.Control
              type="text"
              name="specie"
              value={inputs.specie || ""}
              onChange={(e) => handleChange(e)}
              maxLength={30}

           />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formR">
            <Form.Label>race*</Form.Label>
            <Form.Control
              type="text"
              name="race"
              value={inputs.race || ""}
              onChange={(e) => handleChange(e)}
              maxLength={30}

            />
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-violeta">Save</button>
          </div>
        </Form>
        {show && (
          <Alert
            key={errorMessage}
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            {errorMessage}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default PacientCreate;