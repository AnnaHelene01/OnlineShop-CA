//import { Link } from 'react-router-dom';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"

import styles from './Nav.module.css'
import { Link } from "react-router-dom";
import Sidebar from "../../../pages/shoppingcart/Sidebar";
import { useSelector } from "react-redux";

const Nav = () => {
    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle(styles.responsiveNav);
    }

    //Get number of added products to cart!!!!
    const cart = useSelector((state) => state.cart);

    return (
        <header className={styles.header}>
            <h3 class={styles.logo}><Link to='/' >AnnaBiz</Link></h3>
            <nav ref={navRef} className={styles.navMenu}>
                <Link to='/' >Home</Link>
                <Link to='/contact' >Contact</Link>
                <button className={styles.shopBtn} style={{ position: "relative"}}>
                <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center blubb"
                    style={{
                    color: "white",
                    width: "1rem",
                    height: "1rem",
                    fontSize: "0.8rem",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    transform: "translate(-110%, 350%)",
                    }}
                >
                 {cart.totalAmount}
                </div>
                    <Sidebar>
                    </Sidebar>
                </button>
                <button className={`${styles.navBtn} ${styles.navHidBtn}`} onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className={styles.navBtn} onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
      );
    }

export default Nav;