import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Integrante1Avatar from '../../assets/imagenes/avatar-agus.png';
import Integrante2Avatar from '../../assets/imagenes/avatar-maxi.png';
import Integrante3Avatar from '../../assets/imagenes/avatar-rosario.jpg';
import Integrante4Avatar from '../../assets/imagenes/avatar-sofia.png';

const AboutUs = () => {
  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-4">Sobre nosotros </h2>
      <h3 className='h3 text-center fraseequipo'>¡Unidos en cada desafío, creamos el éxito juntos!</h3>

      <Row className="justify-content-center">
        
        <Col>
          <Image className="imagenavatar" src={Integrante1Avatar} alt="Avatar Integrante 1" roundedCircle fluid />
          <h4 className="mt-3">Agustina Mena</h4>
        
        </Col>
 
        <Col>
          <Image className="imagenavatar"  src={Integrante2Avatar} alt="Avatar Integrante 2" roundedCircle fluid />
          <h4 className="mt-3">Maximiliano Giordani</h4>
        
        </Col>
   
        <Col>
          <Image className="imagenavatar" src={Integrante3Avatar} alt="Avatar Integrante 3" roundedCircle fluid />
          <h4 className="mt-3">Rosario Alvarez</h4>
        
        </Col>
       
        <Col>
          <Image className="imagenavatar"  src={Integrante4Avatar} alt="Avatar Integrante 4" roundedCircle fluid />
          <h4 className="mt-3">Sofía Delgado</h4>
   
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;