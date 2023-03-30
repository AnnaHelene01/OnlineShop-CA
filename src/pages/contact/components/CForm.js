import React from 'react'
import '../../../utils/themes.scss'
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from './schema';
import { SubmitBtn } from '../../../components/styled-components/SiteStyles';

const CForm = () => {

  //Validate form
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
    <Form onSubmit={handleSubmit(onSubmit)}> 
      <Form.Group className="mb-3" controlId="cformName">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="name" size="md"  {...register('fullName')}/>
        <span>{errors.fullName?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="cformEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" size="md"  {...register('email')}/>
        <span>{errors.email?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="cformSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="subject" size="md" {...register('subject')}/>
        <span>{errors.subject?.message}</span>
      </Form.Group>

      <Form.Group className="mb-3" controlId="cformTextarea">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={2} {...register('body')}/>
        <span>{errors.body?.message}</span>
      </Form.Group>
      <SubmitBtn>SUBMIT</SubmitBtn>
    </Form>
    </>
  );
};

export default CForm;
