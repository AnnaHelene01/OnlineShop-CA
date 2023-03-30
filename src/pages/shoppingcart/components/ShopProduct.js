import React from 'react'
import {
  MDBBtn,
     MDBCard, MDBCardBody, MDBCardImage, MDBCol,
     MDBRow, MDBTypography,
  } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, decreaseProduct, removeProduct } from '../../../state/cart/cartSlice';


const ShopProduct = () => {
  //Cart:
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);

  //Increase product with the + btn
  const handleIncrease = (product) => {
    dispatch(addProduct({ ...product, amount: product.amount + 1 }));
  };
  
  //Decrease product with the - btn
  const handleDecrease = (product) => {
    if (product.amount > 1) {
      dispatch(decreaseProduct({ ...product, amount: product.amount - 1 }));
    } else {
      dispatch(removeProduct(product.id));
    }
  };

  return (
    <>
          {cart.products.map((product, idx) => {
            
          return (
            <MDBCard key={idx} className="rounded-3 mb-4">
              <MDBCardBody className="p-2">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage className="rounded-3" fluid
                      src={product.image}
                      alt={product.name} />
                  </MDBCol>
                  <MDBCol md="4" lg="4" xl="4">
                    <p className="mt-2">{product.name}</p>
                  </MDBCol>
                  <MDBCol md="2 p-0" lg="2 p-0" xl="2 p-0"
                    className="d-flex align-items-center justify-content-around">
                      <MDBBtn size ="sm" onClick={() => handleIncrease(product)}>+</MDBBtn>
                    <p className='p-2 mt-2'>{product.amount}</p>
                    <MDBBtn size="sm" onClick={() => handleDecrease(product)}>-</MDBBtn>
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="3" className="offset-lg-1">
                    <MDBTypography tag="p" className="mb-0">
                      {product.price * product.amount} $
                    </MDBTypography>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
           </MDBCard>
          );
        })}
      
    </>
  );
};

export default ShopProduct;
