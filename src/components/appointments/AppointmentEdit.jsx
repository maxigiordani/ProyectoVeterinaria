/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Form, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { STATUS } from "../constant";
import { validateNames, validateTime } from "../helpers/validateFieldCreate";

const AppointmentEdit = ({ getTurnosAPI }) => {
  const [appointment, setAppointment] = useState({});

  const URLTURNOS = import.meta.env.VITE_API_APPOINTMENTS;

  const navigate = useNavigate();

  const { id } = useParams();

  const appointmentDetailRef = useRef(null);
  const veterinarianRef = useRef(null);
  const petRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    getOne();
  }, []);

  const getOne = async () => {
    try {

      const res = await axios.get(`${URLTURNOS}/${id}`);

      const appointmentApi = res.data;

      setAppointment(appointmentApi);
      console.log(appointmentApi)

    } catch (error) {

      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateNames(appointmentDetailRef.current.value) ||
      !validateNames(veterinarianRef.current.value) ||
      !validateNames(petRef.current.value) ||
      !validateNames(dateRef.current.value) ||
      !validateTime(timeRef.current.value)
    ) {
      Swal.fire("Oop!!", "Some data is invalid", "Error");
      return;
    }

    const apponintmentUpdated = {
     appointmentDetail: appointmentDetailRef.current.value,
      veterinarian: veterinarianRef.current.value,
      pet: petRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.put(
            `${URLTURNOS}/${id}`,
            apponintmentUpdated
          );

          console.log(res);
          if (res.status === STATUS.STATUS_OK) {
            Swal.fire(
              "Updated",
              "Your product have been updated successfully",
              "success"
            );
            e.target.reset();
            getTurnosAPI();
            navigate("/admin/turnos");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      {" "}
      <Container className="py-5">
        <h1>Edit Product</h1>
        <hr />
        {/* Form Product */}
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formDetails">
            <Form.Label>Appointment Detail*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Pepe Argento"
              name="appointmentDetail"
              defaultValue={appointment?.appointmentDetail}
              ref={appointmentDetailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formVeterinarian">
            <Form.Label>Veterinarian*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: pepeargento@gmail.com"
              name= "veterinarian"
              defaultValue={appointment?.veterinarian}
              ref={veterinarianRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPet">
            <Form.Label>Pet *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: 38156334051"
              name="pet"
              defaultValue={appointment?.pet}
              ref={petRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: "
              name="date"
              defaultValue={appointment?.date}
              ref={dateRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Time*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Perro"
              name="time"
              defaultValue={appointment?.time}
              ref={timeRef}
            />
          </Form.Group>

          <div className="text-end">
            <button className="btn-violeta">Update</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AppointmentEdit;