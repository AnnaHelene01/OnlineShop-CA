import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import useApi from '../../hooks/useApi';
import { URL } from '../../utils/constants';
import styles from './Product.module.css'
import { Col, Container, Row } from "react-bootstrap";
import { ShopBtn, Hr } from '../../components/styled-components/SiteStyles';
import { AiFillStar } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { addProduct } from '../../state/cart/cartSlice';
import { Alert } from 'react-bootstrap';

const Product = () => {
    const { productId } = useParams()
    const { data, isLoading, isError} = useApi(URL + productId);
    const dispatch = useDispatch();
  
    //Alert when add to cart is clicked 
    const [showAlert, setShowAlert] = useState(false);

    if(isLoading){
      return <h1 className='text-center'>I am Loading...</h1>
    }
  
    if(isError){
      return <h1 className='text-center'>An error had occured</h1>
    }

    const {imageUrl, title, price, discountedPrice, description, id, reviews } = data;

   //Calculate the discount to %
   const prosentDiscount = (x, y) => {
    let percentage = (x - y) / x * 100
    if (percentage === 0) {
      return
    }
    return `-${Math.floor(percentage)}%`
  }

    //Check if discounted price is less than price    
      let originalPrice = <h2 className="m-1">{price} $ </h2>
      let pDiscount = "";

      if (discountedPrice !== price) {
        originalPrice =       
        <div className="d-flex">
        <h2 className="m-1">{discountedPrice} $ </h2>
        <h2 className="text-muted text-decoration-line-through m-1"> {price} $</h2>
        </div>
        pDiscount = 
          <div className={styles.prosentDiscount}>
            {prosentDiscount(price, discountedPrice)}
          </div>
      }

    //Handle shopping cart function here:
    const handleAdd = () => {
      dispatch(addProduct({ id: id, name: title, price: price, discountedPrice: discountedPrice, image: imageUrl, amount: 1}));
      //alert('Product has been added!')
      setShowAlert(true);
    }
    console.log(handleAdd);  

  return (
    <>
      <Container className="mt-5">
        <Row>
            <Col sm="12" md="8" lg="8" className="">
            <img src={imageUrl} alt={title} className="w-75" style={{ objectFit: "cover" }}></img>
            {pDiscount}
            </Col>
            <Col sm="12" md="4" lg="4">
                <h1>{title}</h1>
                <div className="d-flex">
                     <h2 className="m-1">{originalPrice} </h2>
                </div>
                <div className={styles.infoStar}>
                    <span className={styles.productStar}><AiFillStar /></span>
                    <span className={styles.productStar}><AiFillStar /></span>
                    <span className={styles.productStar}><AiFillStar /></span>
                    <span className={styles.productStar}><AiFillStar /></span>
                    <span className={styles.productStar}><AiFillStar /></span>
                </div>
                <Hr></Hr>
                <h3>Product description</h3>
                <p>{description}</p>
                {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                  Product has been added!
                </Alert>
                   )}
                <ShopBtn onClick={handleAdd}>Add to cart</ShopBtn>

                <Hr></Hr>

                <div className={styles.detailsSection}>
                <button type="button" className={styles.question}>Shipping and return</button>
                    <div className={styles.oftenasked}>
                        <p className={styles.detailsTxt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei</p>
                    </div>
                    <button type="button" className={styles.question}>Warranty</button>
                    <div className={styles.oftenasked}>
                        <p className={styles.detailsTxt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei</p>
                    </div>

                <Hr></Hr>
            </div>
            </Col>
        </Row>
  </Container> 
  <Container>
  <Row>
      <h3>Reviews:</h3>
        {reviews.length > 0 ? 
          reviews.map((review, idx) => (
            <p key={idx}><strong>{review.username} - </strong>{review.description}</p>
          )) : 
          <p>Sorry, this product has no reviews yet.</p>
        }
  </Row>
  </Container>

    </>
  )
}

export default Product
