import { useEffect, useState } from "react";
import { Form, Container, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../config/axiosInit";
import Swal from "sweetalert2";
import { STATUS } from "../constant";
import { useForm } from "react-hook-form";
import {
  ErrorMessage,
  validationAppointment,
} from "../helpers/validateFieldCreate";
import dayjs from "dayjs";

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
  }, []);

  const getOne = async () => {
    try {
      const res = await axios.get(`${URLTURNOS}/${id}`);
      const appointmentApi = res.data;

      const formattedDate = dayjs(appointmentApi.date).format("YYYY-MM-DD");

      setValue("date", formattedDate);

      Object.entries({ ...appointmentApi, date: formattedDate }).forEach(
        ([key, value]) => {
          if (key !== "date") {
            setValue(key, value);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.put(`${URLTURNOS}/${id}`, data);

      console.log(res);
      if (res.status === STATUS.STATUS_OK) {
        Swal.fire(
          "Actualizado",
          "El paciente fue actualizado correctamente",
          "success"
        );
        reset();
        getTurnosAPI();
        navigate("/admin/turnos");
      }
    } catch (error) {
      error.response.data?.message &&
        setErrorMessage(error.response.data?.message);
      error.response.data?.errors?.length > 0 &&
        error.response.data.errors?.map((error) => setErrorMessage(error.msg));
    }
  };

  return (
    <div>
      <Container className="py-5 estilotabla">
        <h1>Editar Turno</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formDetails">
            <Form.Label>Detalle del turno*</Form.Label>
            <Form.Control
              type="text"
              placeholder="E.g., Vaccination"
              required
              maxLength={30}
              {...register(
                "appointmentDetail",
                validationAppointment.appointmentDetail
              )}
            />
            {errors.appointmentDetail && (
              <ErrorMessage message={errors.appointmentDetail.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formVeterinarian">
            <Form.Label>Veterinario*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dr. Smith"
              {...register("veterinarian", validationAppointment.veterinarian)}
              maxLength={30}
              required
            />
            {errors.veterinarian && (
              <ErrorMessage message={errors.veterinarian.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPet">
            <Form.Label>Nombre de mascota*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Max"
              maxLength={30}
              required
              {...register("pet", validationAppointment.pet)}
            />
            {errors.pet && <ErrorMessage message={errors.pet.message} />}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Fecha*</Form.Label>
            <Form.Control
              type="date"
              {...register("date", validationAppointment.date)}
              required
            />
            {errors.date && <ErrorMessage message={errors.date.message} />}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Horario*</Form.Label>
            <Form.Control
              type="time"
              required
              placeholder="Ej. 10:00 AM"
              {...register("time", validationAppointment.time)}
            />
            {errors.time && <ErrorMessage message={errors.time.message} />}
          </Form.Group>

          <div className="text-end">
            <button className="btn btn-violeta">Actualizar</button>
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
