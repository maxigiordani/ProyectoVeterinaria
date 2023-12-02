/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Form, Container, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../config/axiosInit";
import Swal from "sweetalert2";
import { STATUS } from "../constant";
import { useForm } from "react-hook-form";
import { ErrorMessage, validationsFieldCreate } from "../helpers/validateFieldCreate";

const PacientEdit = ({ getTurnosAPI }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const URL = import.meta.env.VITE_API_VETERINARIA;
  const navigate = useNavigate();
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOne = async () => {
    try {
      const res = await axios.get(`${URL}/${id}`);
      const pacientAPI = res.data;

      Object.entries(pacientAPI).forEach(([key, value]) => {
        setValue(key, value);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.put(`${URL}/${id}`, data);

      console.log(res);
      if (res.status === STATUS.STATUS_OK) {
        Swal.fire('Updated', 'Your pacient has been updated successfully', 'success');
        reset(); 
        getTurnosAPI();
        navigate('/admin/pacientes');
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
        <h1>Edit Pacient 🐾</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formDetails">
            <Form.Label>Owner Name*</Form.Label>
            <Form.Control
              type="text"
              {...register("ownerName", validationsFieldCreate.ownerName)}
            />
            {errors.ownerName && (
              <ErrorMessage message={errors.ownerName.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formVeterinarian">
            <Form.Label>email*</Form.Label>
            <Form.Control
              type="text"
              {...register("email", validationsFieldCreate.email)}
            />
            {errors.email && (
              <ErrorMessage message={errors.email.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formtel">
            <Form.Label>Tel*</Form.Label>
            <Form.Control
              type="text"
              placeholder="E.g., Max"
              {...register("tel", validationsFieldCreate.tel)}
            />
            {errors.tel && (
              <ErrorMessage message={errors.tel.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>petName*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buddy"
              {...register("petName", validationsFieldCreate.petName)}
            />
            {errors.petName && (
              <ErrorMessage message={errors.petName.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Specie*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Perro"
              {...register("specie", validationsFieldCreate.specie)}
            />
            {errors.specie && (
              <ErrorMessage message={errors.specie.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Race*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Labrador"
              {...register("race", validationsFieldCreate.race)}
            />
            {errors.race && (
              <ErrorMessage message={errors.race.message} />
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

export default PacientEdit;
