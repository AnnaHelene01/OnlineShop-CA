import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Offcanvas } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useState } from 'react'
import ShopProduct from './components/ShopProduct';
import { MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../state/cart/cartSlice';
import Checkout from './components/Checkout';

const Sidebar = () => { 
  const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  return (  
    <>  
      <Container className='p-4'>  
        <AiOutlineShoppingCart onClick={showSidebar} />
        <Offcanvas placement='end' show={show} onHide={closeSidebar}>  
          <Offcanvas.Header closeButton>  
            <Offcanvas.Title>Shopping cart</Offcanvas.Title>  
          </Offcanvas.Header>  
          <Offcanvas.Body>  
            {cart.total > 0 ? (
              <>
                <ShopProduct />
                <MDBCard className="mb-4 mt-4">
                  <MDBCardBody className="text-center">
                    <MDBBtn
                      className=" text-center"
                      onClick={() => dispatch(clearCart())}
                      block
                      size="lg"
                      style={{ backgroundColor: "#FF7D7D" }}
                    >
                      CLEAR CART
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
                <Checkout />
                <MDBCard className="mb-4 mt-4">
                  <MDBCardBody className="p-4 d-flex flex-row">
                    Total: {cart.total} $
                  </MDBCardBody>
                </MDBCard>
              </>
            ) : (
              <p>Cart is empty! Continue shopping</p>
            )}
          </Offcanvas.Body>  
        </Offcanvas>  
      </Container>  
    </>  
  );  
}

export default Sidebar;
