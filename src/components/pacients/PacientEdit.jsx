import { useEffect, useRef, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../config/axiosInit';
import Swal from 'sweetalert2';
import { STATUS } from '../constant/index';
import { validateEmail, validateNames, validateTel } from '../helpers/validateFieldCreate';


// eslint-disable-next-line react/prop-types
const PacientEdit = ({getAPI}) => {
    const [pacient, setPacient] = useState({});

  const URL = import.meta.env.VITE_API_VETERINARIA;

  const navigate = useNavigate();

  const { id } = useParams();

  const pacientOwnerNameRef = useRef(null);
  const pacientEmailRef = useRef(null);
  const pacientTelRef = useRef(null);
  const pacientPetNameRef = useRef(null);
  const pacientSpecieRef = useRef(null);
  const pacientRaceRef= useRef(null);


  useEffect(() => {
    getOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getOne = async () => {
    try {
 
      const res = await axios.get(`${URL}/${id}`);
      const pacientApi = res.data;

      setPacient(pacientApi);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateNames(pacientOwnerNameRef.current.value) ||
      !validateEmail(pacientEmailRef.current.value) ||
      !validateTel(pacientTelRef.current.value)||
      !validateNames(pacientPetNameRef.current.value) ||
      !validateNames(pacientSpecieRef.current.value) ||
      !validateNames(pacientRaceRef.current.value) 

    ) {
      Swal.fire('Oop!!', 'Some data is invalid', 'Error');
      return;
    }

    const pacientUpdated = {
        ownerName: pacientOwnerNameRef.current.value,
      email: pacientEmailRef.current.value,
      tel: pacientTelRef.current.value,
      petName: pacientPetNameRef.current.value,
      specie: pacientSpecieRef.current.value,
      race:pacientRaceRef.current.value
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Update',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
         
          const res = await axios.put(`${URL}/${id}`, pacientUpdated);

          console.log(res);
          if (res.status === STATUS.STATUS_OK) {
            Swal.fire(
              'Updated',
              'Your product have been updated successfully',
              'success'
            );
            e.target.reset();
            getAPI();
            navigate('/admin/pacientes');
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  return (
    <div>
      <Container className='py-5'>
        <h1>Edit Product</h1>
        <hr />
        {/* Form Product */}
        <Form className='my-5' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formOwnerName'>
            <Form.Label>Owner name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Pepe Argento"
              name="ownerName"
              defaultValue={pacient?.ownerName}
              ref={pacientOwnerNameRef}

            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: pepeargento@gmail.com'
              defaultValue={pacient?.email}
              ref={pacientEmailRef}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formTel'>
            <Form.Label>Tel *</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: 38156334051'
              defaultValue={pacient?.tel}
              ref={pacientTelRef}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formPetName'>
            <Form.Label>Pet Name *</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: Coco'
              defaultValue={pacient?.petName}
              ref={pacientPetNameRef}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formSpecie'>
            <Form.Label>Specie*</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: Perro'
              defaultValue={pacient?.specie}
              ref={pacientSpecieRef}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formPetName'>
            <Form.Label>Race *</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: Bulldog Frances'
              defaultValue={pacient?.race}
              ref={pacientRaceRef}
            />
          </Form.Group>
          <div className='text-end'>
            <button className='btn-orange'>Update</button>
          </div>
        </Form>
      </Container>
    </div>
  );

};

export default PacientEdit;