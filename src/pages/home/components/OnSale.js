import React, { useEffect, useState } from 'react';
import { Header, HeaderLine } from '../../../components/styled-components/SiteStyles';
import useApi from '../../../hooks/useApi';
import { URL } from '../../../utils/constants';
import { Container } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OnSale = () => {
  // Get data
  const { data, isLoading, isError } = useApi(URL);
  console.log(data);

  const [slidesToShow, setSlidesToShow] = useState(4); // Default number of slides to show

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 528) {
        setSlidesToShow(1);
    } else if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 992) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) {
    return <h1 className='text-center'>I am Loading...</h1>;
  }

  if (isError) {
    return <h1 className='text-center'>An error has occurred</h1>;
  }

  const onSaleProducts = data.filter(item => item.discountedPrice !== item.price); // Filter products with discounted price

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  };

  return (
    <>
      <Header className='mt-5'>Discounted Products</Header>
      <HeaderLine></HeaderLine>
      <Container>
        <Slider {...settings}>
          {onSaleProducts.map((item, idx) => {
            let originalPrice = (
              <div className="d-flex">
                <p>{item.discountedPrice} $ </p>
                <p className="text-muted text-decoration-line-through"> {item.price} $</p>
              </div>
            );
            return (
              <MDBCard className="m-3" key={item.id}>
                <MDBCardImage src={item.imageUrl} position='top' alt={item.title} style={{ height: "200px", objectFit: "cover" }} />
                <MDBCardBody>
                  <MDBCardTitle>
                    <Link to={`/product/${item.id}`} key={idx}>{item.title}</Link>
                  </MDBCardTitle>
                  <MDBCardText>
                    <p>{originalPrice}</p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};

export default OnSale;
