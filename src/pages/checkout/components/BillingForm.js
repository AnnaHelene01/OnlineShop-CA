import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BillingForm = () => {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" size="md" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" size="md" placeholder="Enter full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" size="md" placeholder="Enter shipping address" />
      </Form.Group>

      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>City</Form.Label>
        <Form.Control placeholder="Enter city" size="md" />
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>State</Form.Label>
        <Form.Control placeholder="Enter state" size="md" />
      </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Postal code</Form.Label>
        <Form.Control placeholder="Enter postal code" size="md" />
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Phone</Form.Label>
        <Form.Control placeholder="Enter phone number" size="md" />
      </Form.Group>
        </Col>
      </Row>
    </Form>
    </>
  );
};

export default BillingForm;
