import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { validationRules, errorStyle, ErrorMessage } from './helpers/PlanDetailValidations';

const PlanDetail = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showModal, setShowModal] = React.useState(false);

  const onSubmit = async (data) => {
 

 
    setShowModal(true);

    
    reset();
  };

  const handleCloseModal = () => {
  
    setShowModal(false);
  };

  return (
    <div className='container fluid formularioconsulta'>
      <h2>Contáctenos</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre y apellido:</Form.Label>
          <Form.Control type="text" {...register('name', validationRules.name)} placeholder='Juan Perez' maxLength={25}/>
          {errors.name && <ErrorMessage message={errors.name.message} />}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Correo Electrónico:</Form.Label>
          <Form.Control type="email" {...register('email', validationRules.email)} placeholder='juanperez@gmail.com' maxLength={35} />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Número de Celular:</Form.Label>
          <Form.Control type="tel" {...register('phone', validationRules.phone)} placeholder='54381545588' maxLength={12}/>
          {errors.phone && <ErrorMessage message={errors.phone.message} />}
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control as="textarea" rows={3} {...register('message', validationRules.message)} placeholder='Su consulta' maxLength={300}/>
          {errors.message && <ErrorMessage message={errors.message.message} />}
        </Form.Group>

        <Button className="botonformulario" variant="primary" type="submit">
          Enviar Consulta
        </Button>
      </Form>
    
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Consulta Enviada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Gracias por tu consulta. Pronto sera Contactado.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PlanDetail;
