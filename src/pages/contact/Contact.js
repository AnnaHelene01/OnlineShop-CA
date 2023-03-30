import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Header, HeaderLine, SubmitBtn } from '../../components/styled-components/SiteStyles';
import CForm from './components/CForm';

const Contact = () => {
  return (
    <>
     <Header>Contact us</Header> 
     <HeaderLine></HeaderLine>
     <Container>
      <Row className='m-auto justify-content-center'>
        <Col lg="6">
           <CForm />
        </Col>
      </Row>
     </Container>
    </>
  )
};

export default Contact;
