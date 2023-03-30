import { Col, Container, Row } from "react-bootstrap";
import Products from "./components/Products";
import img from "./images/collection.png";
import './Home.css'
import { Header } from "../../components/styled-components/SiteStyles";

const Home = () => {
    return (
      <>
      <Container>
         <Row>
          <Col sm="12" md="6" lg="6" className="m-auto text-center mt-5">
          <Header>Welcome to AnnaBiz</Header>
          <p>Time to upgrade?, or just looking for something new?</p>
          <p>Then you have entered the right site! Enjoy shopping!</p>
          </Col>
          <Col sm="12" md="6" lg="6" className="text-center">
          <img src={img} className="img-frontpage mt-5"></img>
          </Col>
         </Row>
      </Container>
  
        <Products />
      </>
    )
  };
  
  export default Home;
  