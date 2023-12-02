/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { Container, Form, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../config/axiosInit';
import Swal from 'sweetalert2';
import { STATUS } from '../constant/index';
import { useForm } from 'react-hook-form';
import { ErrorMessage, validationsFieldCreate } from '../helpers/validateFieldCreate';

const PacientEdit = ({ getAPI }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const URL = import.meta.env.VITE_API_VETERINARIA;
  const navigate = useNavigate();
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);

  const pacientOwnerNameRef = useRef(null);
  const pacientEmailRef = useRef(null);
  const pacientTelRef = useRef(null);
  const pacientPetNameRef = useRef(null);
  const pacientSpecieRef = useRef(null);
  const pacientRaceRef = useRef(null);

  useEffect(() => {
    getOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOne = async () => {
    try {
      const res = await axios.get(`${URL}/${id}`);
      const pacientApi = res.data;

      // Setear los valores al formulario
      Object.entries(pacientApi).forEach(([key, value]) => {
        setValue(key, value);
      });
    } catch (error) {
      console.log(error);
      // Manejo de errores aquí, puedes mostrar un mensaje o redirigir a otra página
    }
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.put(`${URL}/${id}`, data);

      console.log(res);
      if (res.status === STATUS.STATUS_OK) {
        Swal.fire('Updated', 'Your patient has been updated successfully', 'success');
        reset(); // Resetea el formulario
        getAPI();
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
        <h1>Edit Patient</h1>
        <hr />
        {/* Form Patient */}
        <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formOwnerName">
            <Form.Label>Owner name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Pepe Argento"
              name="ownerName"
              ref={(e) => {
                pacientOwnerNameRef.current = e;
                register(e, validationsFieldCreate.ownerName);
              }}
            />
            {errors.ownerName && (
              <ErrorMessage message={errors.ownerName.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: pepeargento@gmail.com"
              ref={(e) => {
                pacientEmailRef.current = e;
                register(e, validationsFieldCreate.email);
              }}
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTel">
            <Form.Label>Tel *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: 38156334051"
              ref={(e) => {
                pacientTelRef.current = e;
                register(e, validationsFieldCreate.tel);
              }}
            />
            {errors.tel && <ErrorMessage message={errors.tel.message} />}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPetName">
            <Form.Label>Pet Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Coco"
              ref={(e) => {
                pacientPetNameRef.current = e;
                register(e, validationsFieldCreate.petName);
              }}
            />
            {errors.petName && (
              <ErrorMessage message={errors.petName.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSpecie">
            <Form.Label>Specie*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Perro"
              ref={(e) => {
                pacientSpecieRef.current = e;
                register(e, validationsFieldCreate.specie);
              }}
            />
            {errors.specie && <ErrorMessage message={errors.specie.message} />}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formR">
            <Form.Label>Race*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Bulldog Frances"
              ref={(e) => {
                pacientRaceRef.current = e;
                register(e, validationsFieldCreate.race);
              }}
            />
            {errors.race && <ErrorMessage message={errors.race.message} />}
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
