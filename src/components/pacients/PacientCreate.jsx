/* eslint-disable react/prop-types */
import { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../config/axiosInit";
import { useForm } from "react-hook-form";
import {
  ErrorMessage,
  validationsFieldCreate,
} from "../helpers/validateFieldCreate";

const PacientCreate = ({ getAPI }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);

  const URL = import.meta.env.VITE_API_VETERINARIA;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(URL, data);
      console.log(res);
      if (res.status === 201) {
        Swal.fire(
          "Created",
          "Your patient has been created successfully",
          "success"
        );
        reset();
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
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Add Pacient🐾</h1>
        <hr />
        {/* Form Pacient */}
        <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formOwnerName">
            <Form.Label>Owner name*</Form.Label>
            <Form.Control
              type="text"
              {...register("ownerName", validationsFieldCreate.ownerName)}
              placeholder="Juan Perez"
              maxLength={30}
            />
            {errors.ownerName && (
              <ErrorMessage message={errors.ownerName.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              {...register("email", validationsFieldCreate.email)}
              placeholder="juanperez@gmail.com"
              maxLength={30}
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTel">
            <Form.Label>Tel*</Form.Label>
            <Form.Control
              type="text"
              {...register("tel", validationsFieldCreate.tel)}
              placeholder="381544444444"
              maxLength={12}
            />
            {errors.tel && <ErrorMessage message={errors.tel.message} />}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPetName">
            <Form.Label>Pet Name*</Form.Label>
            <Form.Control
              type="text"
              {...register("petName", validationsFieldCreate.petName)}
              placeholder="Frida"
              maxLength={30}
            />
            {errors.petName && (
              <ErrorMessage message={errors.petName.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSpecie">
            <Form.Label>Specie*</Form.Label>
            <Form.Control
              type="text"
              {...register("specie", validationsFieldCreate.specie)}
              placeholder="Perro"
              maxLength={30}
            />
            {errors.specie && <ErrorMessage message={errors.specie.message} />}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formR">
            <Form.Label>Race*</Form.Label>
            <Form.Control
              type="text"
              {...register("race", validationsFieldCreate.race)}
              placeholder="Fox terrier"
              maxLength={30}
            />
            {errors.race && <ErrorMessage message={errors.race.message} />}
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

export default PacientCreate;