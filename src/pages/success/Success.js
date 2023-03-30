import React from 'react'
import { Header, HeaderLine } from '../../components/styled-components/SiteStyles'

const Success = () => {
  return (
    <>
      <Header>Order confirmation</Header>
      <HeaderLine></HeaderLine>
      <img src='./success' className='img-fluid shadow-4' alt='...' />

    </>
  )
};

export default Success;