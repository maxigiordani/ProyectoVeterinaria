/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../config/axiosInit"

const PacientCreate = ({ getAPI }) => {
    const [inputs, setInputs] = useState({});
    const URL = import.meta.env.VITE_API_VETERINARIA;
    const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values)=>({...values, [name]:value}))
}
const navigate = useNavigate();

const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(inputs)
    //valido los campos

    const newPacient ={
        ownerName:inputs.ownerName,
        email: inputs.email,
        tel: inputs.tel,
        petName: inputs.petName,
        specie: inputs.specie, 
        race: inputs.race
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
              //recargar la tabla;
             getAPI()
              navigate("/admin-pacientes");
            }
          } catch (error) {
            console.error(error);
          }
        }
      });
    }
    return (
        <div>
               <Container className="py-5">
        <h1>Add Pacient🐾</h1>
        <hr />
        {/* Form Pacient */}
        <Form className="my-5"  onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Owner name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Pepe Argento"
              name="ownerName"
              value={inputs.ownerName || ""}
              onChange={(e)=> handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: pepeargento@gmail.com"
              name="email"
              value={inputs.email || ""}
              onChange={(e)=> handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tel*</Form.Label>
            <Form.Control
              type="text"
              name="tel"
              value={inputs.tel || ""}
              onChange={(e)=> handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Pet Name*</Form.Label>
            <Form.Control
              type="text"
              name="petName"
              value={inputs.petName || ""}
              onChange={(e)=> handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Specie*</Form.Label>
            <Form.Control
              type="text"
              name="specie"
              value={inputs.specie || ""}
              onChange={(e)=> handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>race*</Form.Label>
            <Form.Control
              type="text"
              name="race"
              value={inputs.race || ""}
              onChange={(e)=> handleChange(e)}
            />
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-primary">Save</button>
          </div>
        </Form>
    
      </Container>
    </div>
    );
  };

export default PacientCreate;