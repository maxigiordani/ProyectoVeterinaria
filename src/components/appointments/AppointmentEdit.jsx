/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Form, Container, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../config/axiosInit";
import Swal from "sweetalert2";
import { STATUS } from "../constant";
import { useForm } from "react-hook-form";
import { ErrorMessage, validationAppointment } from "../helpers/validateFieldCreate";

const AppointmentEdit = ({ getTurnosAPI }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const URLTURNOS = import.meta.env.VITE_API_APPOINTMENTS;
  const navigate = useNavigate();
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOne = async () => {
    try {
      const res = await axios.get(`${URLTURNOS}/${id}`);
      const appointmentApi = res.data;

      // Setear los valores al formulario
      Object.entries(appointmentApi).forEach(([key, value]) => {
        setValue(key, value);
      });
    } catch (error) {
      console.log(error);
      // Manejo de errores aquí, puedes mostrar un mensaje o redirigir a otra página
    }
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.put(`${URLTURNOS}/${id}`, data);

      console.log(res);
      if (res.status === STATUS.STATUS_OK) {
        Swal.fire('Updated', 'Your appointment has been updated successfully', 'success');
        reset(); // Resetea el formulario
        getTurnosAPI();
        navigate('/admin/turnos');
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
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Edit Appointment</h1>
        <hr />
        {/* Form Appointment */}
        <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formDetails">
            <Form.Label>Appointment Detail*</Form.Label>
            <Form.Control
              type="text"
              placeholder="E.g., Vaccination"
              {...register("appointmentDetail", validationAppointment.appointmentDetail)}
            />
            {errors.appointmentDetail && (
              <ErrorMessage message={errors.appointmentDetail.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formVeterinarian">
            <Form.Label>Veterinarian*</Form.Label>
            <Form.Control
              type="text"
              placeholder="E.g., Dr. Smith"
              {...register("veterinarian", validationAppointment.veterinarian)}
            />
            {errors.veterinarian && (
              <ErrorMessage message={errors.veterinarian.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPet">
            <Form.Label>Pet Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="E.g., Max"
              {...register("pet", validationAppointment.pet)}
            />
            {errors.pet && (
              <ErrorMessage message={errors.pet.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date*</Form.Label>
            <Form.Control
              type="text"
              placeholder="E.g., 2023-01-01"
              {...register("date", validationAppointment.date)}
            />
            {errors.date && (
              <ErrorMessage message={errors.date.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Time*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. 10:00 AM"
              {...register("time", validationAppointment.time)}
            />
            {errors.time && (
              <ErrorMessage message={errors.time.message} />
            )}
          </Form.Group>

          <div className="text-end">
            <button className="btn-violeta">Update</button>
          </div>
        </Form>
        {errorMessage && (
          <Alert
            variant="danger"
            onClose={() => setErrorMessage(null)}
            dismissible
          >
            {errorMessage}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default AppointmentEdit;