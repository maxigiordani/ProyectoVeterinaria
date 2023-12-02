import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { validationRules, ErrorMessage } from '../helpers/PlanDetailValidations';

const ContactUs = () => {
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
    <div className='container fluid mt-5'>
      <div className='row'>
        <div className='col-md-6'>
          <h2 className="mb-2">Contáctenos</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre y apellido:</Form.Label>
              <Form.Control
                type="text"
                {...register('name', validationRules.name)}
                placeholder='Juan Perez'
                maxLength={25}
                required
              />
              {errors.name && <ErrorMessage message={errors.name.message} />}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Correo Electrónico:</Form.Label>
              <Form.Control
                type="email"
                {...register('email', validationRules.email)}
                placeholder='juanperez@gmail.com'
                maxLength={35}
                required
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Número de Celular:</Form.Label>
              <Form.Control
                type="tel"
                {...register('phone', validationRules.phone)}
                placeholder='54381545588'
                maxLength={12}
                required
              />
              {errors.phone && <ErrorMessage message={errors.phone.message} />}
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register('message', validationRules.message)}
                placeholder='Su consulta'
                maxLength={300}
                required
              />
              {errors.message && <ErrorMessage message={errors.message.message} />}
            </Form.Group>

            <Button className="botonformulario" variant="primary" type="submit">
              Enviar Consulta
            </Button>
          </Form>
        </div>

        <div className='col-md-6'>
          <div className='container mt-4'>
            <h3>Nos encontramos en:</h3>
            <p className="mb-2">Dirección: Batalla de suipacha 421</p>
            <p className="mb-2">Correo Electrónico: veternariarolling23@gmail.com </p>
            <p>Teléfono: +5493814238444</p>
          </div>

          <div className='container-fluid mt-4'>
            <div className='row'>
              <div className='col-md-12 map-container'>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="Ubicación en Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20142.66716927833!2d-65.21714079247393!3d-26.815956146192327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225dfb6e16e3f7%3A0x338876b84ef4b1b9!2sVeterinaria%20Catdog!5e0!3m2!1ses-419!2sar!4v1701327155877!5m2!1ses-419!2sar"
                    allowFullScreen
                    className='embed-responsive-item'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Consulta Enviada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Gracias por tu consulta. Pronto serás contactado.
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

export default ContactUs;