import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

const OrderSummary = () => {
    //Cart:
  const cart = useSelector((state) => state.cart);

  console.log(cart);

 
return (
  <>
          {cart.products.map((product, idx) => {
            
            return (
              <MDBCard key={idx} className="rounded-3 mb-4">
              <MDBCardBody className="p-4">
                  <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage className="rounded-3" fluid
                      src={product.image}
                      alt={product.name} />
                  </MDBCol>
                  <MDBCol md="4" lg="4" xl="4">
                      <p className="lead fw-normal mb-2">{product.name}</p>
                      <p>
                      <span className="text-muted">Amount: </span>{product.amount}{" "}
                      </p>
                  </MDBCol>

                  <MDBCol md="3" lg="3" xl="3" className="offset-lg-1">
                    <MDBTypography tag="p" className="mb-0">
                      {product.price * product.amount} $
                    </MDBTypography>
                  </MDBCol>
                  
                  <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-danger">
                      <MDBIcon fas icon="trash text-danger" size="lg" />
                      </a>
                  </MDBCol>
                  </MDBRow>
              </MDBCardBody>
              </MDBCard>
            );
          })};
        </>
      )
};

export default OrderSummary;