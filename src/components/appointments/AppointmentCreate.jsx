/* eslint-disable react/prop-types */
import { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../config/axiosInit";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { ErrorMessage, validationAppointment } from "../helpers/validateFieldCreate";

const AppointmentCreate = ({ getTurnosAPI }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);

  const URLTURNO = import.meta.env.VITE_API_APPOINTMENTS;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      data.date = dayjs(data.date).format("DD-MM-YYYY");

      const res = await axios.post(URLTURNO, data);
      console.log(res);
      if (res.status === 201) {
        Swal.fire(
          "Created",
          "Your appointment has been created successfully",
          "success"
        );
        reset();
        getTurnosAPI();
        navigate("/admin/turnos");
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
        <h1>Add Appointment</h1>
        <hr />
        {/* Form Appointment */}
        <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formAppointmentDetail">
            <Form.Label>Appointment Details*</Form.Label>
            <Form.Control
              type="text"
              {...register(
                "appointmentDetail",
                validationAppointment.appointmentDetail
              )}
              placeholder="Mordida superficial"
            />
            {errors.appointmentDetail && (
              <ErrorMessage message={errors.appointmentDetail.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formVeterinarian">
            <Form.Label>Veterinarian*</Form.Label>
            <Form.Control
              type="text"
              {...register(
                "veterinarian",
                validationAppointment.veterinarian
              )}
              placeholder="Medico Alejandro Cortez"
            />
            {errors.veterinarian && (
              <ErrorMessage message={errors.veterinarian.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPetName">
            <Form.Label>Pet Name*</Form.Label>
            <Form.Control
              type="text"
              {...register(
                "pet",
                validationAppointment.pet
              )}
              placeholder="Buddy"
            />
            {errors.pet && (
              <ErrorMessage message={errors.pet.message} />
            )}
          </Form.Group>
                    <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date*</Form.Label>
            <Form.Control
              type="date"
              {...register(
                "date",
                validationAppointment.date
              )}
            />
            {errors.date && (
              <ErrorMessage message={errors.date.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Time*</Form.Label>
            <Form.Control
              type="text"
              {...register(
                "time",
                validationAppointment.time
              )}
              placeholder="14:30"
            />
            {errors.time && (
              <ErrorMessage message={errors.time.message} />
            )}
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-violeta">Save</button>
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

export default AppointmentCreate;
