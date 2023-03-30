import React from 'react'
import {
    MDBBtn, MDBCard, MDBCardBody,
  } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <>
        <MDBCard>
          <MDBCardBody>
            <Link to='/checkout' className='text-decoration-none text-white' >
              <MDBBtn block size="lg" style={{backgroundColor: "#FF7D7D"}}>
                 Go to checkout
              </MDBBtn>
            </Link>
          </MDBCardBody>
        </MDBCard>
    </>
  )
}

export default Checkout;
   