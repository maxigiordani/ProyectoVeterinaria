import '../components/plandetail.css';
import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const PlanDetail = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showModal, setShowModal] = useState(false);

  const emailjsConfig = {
    serviceId: 'service_fai8lrq', // Reemplaza con tu Service ID de EmailJS
    templateId: 'template_mmkeyvm', // Reemplaza con tu Template ID de EmailJS
    userId: 'uMxMpO7OXL7pbTgxO', // Reemplaza con tu User ID de EmailJS
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
    <div className='container'>
      <h2>Consulta de Plan</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre y apellido:</Form.Label>
          <Form.Control type="text" {...register('name', { required: 'Este campo es obligatorio' })} placeholder='Juan Perez' maxLength={25}/>
          {errors.name && <p>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Correo Electrónico:</Form.Label>
          <Form.Control type="email" {...register('email', { required: 'Este campo es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Correo electrónico inválido' } })} placeholder='juanperez@gmail.com' maxLength={35} />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control as="textarea" rows={3} {...register('message', { required: 'Este campo es obligatorio' })} placeholder='consultanos' maxLength={300}/>
          {errors.message && <p>{errors.message.message}</p>}
        </Form.Group>

        <Button className="botonformulario" variant="primary" type="submit">
          Enviar Consulta
        </Button>
      </Form>

      {/* Ventana Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Consulta Enviada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Gracias por tu consulta, recibira un correo electrónico.
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
