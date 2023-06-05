import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useApi from '../../../hooks/useApi';
import { URL } from '../../../utils/constants';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBCol,
    MDBInput,
  } from 'mdb-react-ui-kit';
import { Header, HeaderLine } from '../../../components/styled-components/SiteStyles';

const Products = () => {
  //Search bar
    const [ query, setQuery ] = useState("");
  
  //Get data
    const { data, isLoading, isError} = useApi(URL);
  
    if(isLoading){
      return <h1 className='text-center'>I am Loading...</h1>
    }
  
    if(isError){
      return <h1 className='text-center'>An error has occured</h1>
    }

  return (
    <>
    <Header>Products</Header>
    <HeaderLine></HeaderLine>
    <Container>
      <Row>
        <Col sm="12" md="6" lg="4 p-4">
          <MDBCol>
              <p>Search for products</p>
            <MDBInput placeholder="Search" type="text" containerClass="mt-0" 
            onChange={(e) => setQuery(e.target.value)}
             />
          </MDBCol>
        </Col>
      </Row>
    </Container>    
    <Container>
        <Row>
            {data.filter((item) =>
            item.title.toLowerCase().includes(query)
            ).map((item, idx) => {
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
                <>
                <Col sm="12" md="6" lg="4">
                <MDBCard className="m-3">
                <MDBCardImage src={item.imageUrl} position='top' alt={item.title} style={{ height: "300px", objectFit: "cover" }} />
                <MDBCardBody> 
                    <MDBCardTitle><Link to={`/product/${item.id}`} key={idx}>{item.title}</Link></MDBCardTitle>
                    <MDBCardText>
                    <p>{originalPrice}</p>
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard>
                </Col>
                </>
            )
             })}
        </Row>
    </Container>
    </>
  )
};

export default Products;
