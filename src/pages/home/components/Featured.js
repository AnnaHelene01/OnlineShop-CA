import React from 'react';
import { Header, HeaderLine, RoundedBtn } from '../../../components/styled-components/SiteStyles';
import useApi from '../../../hooks/useApi';
import { URL } from '../../../utils/constants';
import { Col, Container, Row } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Featured = () => {
  // Get data
  const { data, isLoading, isError } = useApi(URL);
  console.log(data);

  if (isLoading) {
    return <h1 className='text-center'>I am Loading...</h1>;
  }

  if (isError) {
    return <h1 className='text-center'>An error has occurred</h1>;
  }

  const featuredProducts = data.slice(0, 3); // Get the first three products

  return (
    <>
      <Header className='mt-5'>Featured Products</Header>
      <HeaderLine></HeaderLine>
      <Container>
        <Row>
          {featuredProducts.map((item, idx) => {
            let originalPrice = <p>{item.price} $ </p>
            //let discount = "";
        
            if (item.discountedPrice !== item.price) {
                originalPrice =       
                <div className="d-flex">
                <p>{item.discountedPrice} $ </p>
                <p className="text-muted text-decoration-line-through"> {item.price} $</p>
                </div>
            }
            return (
            <Col sm="12" md="6" lg="4" key={item.id}>
                <MDBCard className="m-3">
                    <MDBCardImage src={item.imageUrl} position='top' alt={item.title} style={{ height: "200px", objectFit: "cover" }} />
                    <MDBCardBody> 
                        <MDBCardTitle><Link to={`/product/${item.id}`} key={idx}>{item.title}</Link></MDBCardTitle>
                        <MDBCardText>
                        <p>{originalPrice}</p>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </Col>
            );
          })}
        </Row>
        <div className='mt-3 text-center'>
           <RoundedBtn>See all products</RoundedBtn>
        </div>
      </Container>
    </>
  );
};

export default Featured;
