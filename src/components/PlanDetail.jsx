import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { validationRules, errorStyle, ErrorMessage } from './helpers/PlanDetailValidations';

const PlanDetail = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showModal, setShowModal] = React.useState(false);

  const emailjsConfig = {
    serviceId: 'service_fai8lrq',
    templateId: 'template_mmkeyvm',
    userId: 'uMxMpO7OXL7pbTgxO',
  };

  const onSubmit = async (data) => {
    try {
      const emailData = {
        ...data,
        user_name: data.name,
        user_email: data.email,
      };

      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        emailData,
        emailjsConfig.userId
      );

      console.log('Correo enviado con éxito:', response);

      setShowModal(true);

      reset();
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='container mt-5 fluid containerconsulta'>
      <h2>Consulta de Plan</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre y apellido:</Form.Label>
          <Form.Control type="text" {...register('name', validationRules.name)} placeholder='Juan Perez' maxLength={25} required/>
          {errors.name && <ErrorMessage message={errors.name.message} />}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Correo Electrónico:</Form.Label>
          <Form.Control type="email" {...register('email', validationRules.email)} placeholder='juanperez@gmail.com' maxLength={35} required/>
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </Form.Group>
        
        <Form.Group controlId="formPhone">
          <Form.Label>Número de Celular:</Form.Label>
          <Form.Control type="tel" {...register('phone', validationRules.phone)} placeholder='123-456-7890' maxLength={12} required/>
          {errors.phone && <ErrorMessage message={errors.phone.message} />}
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control as="textarea" rows={3} {...register('message', validationRules.message)} placeholder='consultanos' maxLength={300} required />
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
          Gracias por tu consulta, recibirás un correo electrónico.
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