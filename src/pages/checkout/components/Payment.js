import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

const Payment = () => {
  return (
    <>

    <MDBCardBody>
        <h5> We accept </h5>
        <MDBCardImage className="me-2" width="45px" style={{ height: "auto" }}
        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
        alt="Visa" />
        <MDBCardImage className="me-2" width="45px" style={{ height: "auto" }}
        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
        alt="American Express" />
        <MDBCardImage className="me-2" width="45px" style={{ height: "auto" }}
        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
        alt="Mastercard" />
        <MDBCardImage className="me-2" width="45px" style={{ height: "auto" }}
        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
        alt="PayPal acceptance mark" />
    </MDBCardBody>
  
    <Form className='mt-5'>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Card Number *</Form.Label>
        <Form.Control type="name" size="md" placeholder="1234 5678 1234 5678" />
      </Form.Group>

      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Expiry (MM/YY) *</Form.Label>
        <Form.Control placeholder="04/23" size="md" />
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>CVV *</Form.Label>
        <Form.Control placeholder="123" size="md" />
      </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3 mt-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Your personal data will be used to process your order, 
        support your experience through this site, and for other 
        purposes described in our privacy policy & terms and conditions *" />
      </Form.Group>
      <Form.Group className="mb-5" id="formGridCheckbox">
        <Form.Check type="checkbox" label="I would like to sign up for referral marketing and promotional emails (optional)" />
      </Form.Group>
    </Form>
    </>
  )
}

export default Payment;