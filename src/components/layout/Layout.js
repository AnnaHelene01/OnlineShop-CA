import React from 'react'
import Footer from './footer/Footer'
import Nav from './header/Nav'

//Building project with this Layout component
const Layout = ({children}) => {
  return (
    <div>
         <Nav />
         <main>{children}</main>
         <Footer />
    </div>
  )
};

export default Layout;
