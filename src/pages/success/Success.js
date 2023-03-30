import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Header, HeaderLine, SubmitBtn } from '../../components/styled-components/SiteStyles'
import success from './success.png'

const Success = () => {
  return (
    <>
      <Header>Order confirmation</Header>
      <HeaderLine></HeaderLine>
      <Container>
        <Row className='m-auto text-center'>
          <Col sm="6" md="6" lg="6" className='m-auto'>
            <img src={success} className='img-fluid shadow-4' alt='...' />
            <Link to='/' className='text-decoration-none text-white' >
              <SubmitBtn className='mt-3'>Continue Shopping</SubmitBtn>         
            </Link>
          </Col>
        </Row>
      </Container>

    </>
  )
};

export default Success;
