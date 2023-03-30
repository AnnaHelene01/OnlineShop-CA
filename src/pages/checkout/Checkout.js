import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AlignedLine, Header, HeaderLine, SubmitBtn } from '../../components/styled-components/SiteStyles';
import BillingForm from './components/BillingForm';
import OrderSummary from './components/OrderSummary';
import Payment from './components/Payment';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { clearCart } from '../../state/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
     <Header>Checkout</Header>
     <HeaderLine></HeaderLine>
     <Container>
      <Row>
        <Col lg="6" sm="12" >
          <h3>Billing address</h3>
          <AlignedLine></AlignedLine>
          <BillingForm />
        </Col>
        <Col lg="6" sm="12">

        <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10" sm="12">
              <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Order summary
              </MDBTypography>
              </div>

          <OrderSummary />

          <MDBCard className="mb-4">
              <MDBCardBody className="p-4 d-flex flex-row">
              <MDBTypography tag="h5" className="fw-normal mb-0 text-black">
                  Total amount: {cart.total} $
              </MDBTypography>
              </MDBCardBody>
              </MDBCard>
          </MDBCol>
          </MDBRow>
      </MDBContainer>
      </section>


        </Col>
      </Row>
      <h3 className='mt-5'>Payment</h3>
      <AlignedLine></AlignedLine>
      <Row>
        <Col lg="6" sm="12" >
          <Payment />
          <Link to='/success' className="text-decoration-none text-white">
            <SubmitBtn onClick={() => dispatch(clearCart())}>
            SEND ORDER
            </SubmitBtn>
          </Link>
        </Col>
      </Row>
      
     </Container>
    </>
  )
};

export default Checkout;
