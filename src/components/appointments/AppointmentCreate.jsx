/* eslint-disable react/prop-types */
import { useState } from "react";
import { STATUS } from "../constant";
import Swal from "sweetalert2";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { Alert, Container, Form } from "react-bootstrap";

const AppointmentCreate = ({ getTurnosAPI }) => {
  const [inputs, setInputs] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [show, setShow] = useState(false);
  const URLTURNO = import.meta.env.VITE_API_APPOINTMENTS;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validaciones
    const newAppointment = {
      appointmentDetail: inputs.appointmentDetail,
      veterinarian: inputs.veterinarian,
      pet: inputs.pet,
      date: inputs.date,
      time: inputs.time,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Save",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(URLTURNO, newAppointment);
          console.log(res);
          if (res.status === STATUS.STATUS_CREATED) {
            Swal.fire(
              "Created",
              "Your appointment have been created successfully",
              "success"
            );
            e.target.reset();
            getTurnosAPI();
            navigate("/admin/turnos");
          }
        } catch (error) {
          console.log(error);
          error.response.data?.message &&
            setErrorMessage(error.response.data?.message);
          error.response.data?.errors?.lenght > 0 &&
            error.response.data.errors?.map((error) =>
              setErrorMessage(error.msg)
            );
          setShow(true);
        }
      }
    });
  };

  return (<div>

<Container className='py-5'>
        <h1>Add Appointment</h1>
        <hr />
        {/* Form Appointment*/}
        <Form className='my-5' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formAppointmentDetail'>
            <Form.Label>Appointment Details*</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej:Mordida superficial'
              name='appointmentDetail'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formVeterinarian'>
            <Form.Label>Veterinarian*</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: Medico Alejandro Cortez'
              name='veterinarian'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formPet'>
            <Form.Label>Pet*</Form.Label>
            <Form.Control
              type='text'
              name='pet'
              onChange={handleChange}
              placeholder='Perro'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formDate'>
            <Form.Label>Date*</Form.Label>
            <Form.Control
              type='text'
              name='date'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formTime'>
            <Form.Label>Time*</Form.Label>
            <Form.Control
              type='text'
              name='time'
              onChange={handleChange}
            />
          </Form.Group>
          <div className='text-end'>
            <button className='btn-yellow'>Save</button>
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

  </div>);
};

export default AppointmentCreate;
