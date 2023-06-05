import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";
import Success from "./pages/success/Success";
import Layout from "./components/layout/Layout";
import ListProducts from "./pages/products/ListProducts";


const App = () => {
  return (
    <>
    <Layout>
      <div className="main">
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/products' element={<ListProducts />}/>
          <Route path='/product/:productId' element={<Product />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/success' element={<Success />}/>
          <Route path='*' element={<h1>Sorry, this page does not exist!</h1>} /> 
        </Routes>
      </div>
    </Layout>
    </>
  )
};

export default App;