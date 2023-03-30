import React, { useState } from 'react'
import styles from '../Product.module.css'
import { Hr } from '../../../components/styled-components/SiteStyles';

const Details = () => {

        //Design
        const [showShippingDetails, setShowShippingDetails] = useState(false);
        const [showWarrantyDetails, setShowWarrantyDetails] = useState(false);
      
        function handleShippingClick() {
          setShowShippingDetails(!showShippingDetails);
        }
      
        function handleWarrantyClick() {
          setShowWarrantyDetails(!showWarrantyDetails);
        }

  return (
    <>
                   <div className={styles.detailsSection}>
                  <button type="button" className={styles.question} onClick={handleShippingClick}>
                    Shipping and return
                  </button>
                  {showShippingDetails && (
                    <div className={styles.oftenasked}>
                      <p className={styles.detailsTxt}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei
                      </p>
                    </div>
                  )}
                  <button type="button" className={styles.question} onClick={handleWarrantyClick}>
                    Warranty
                  </button>
                  {showWarrantyDetails && (
                    <div className={styles.oftenasked}>
                      <p className={styles.detailsTxt}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei
                      </p>
                    </div>
                  )}
                  <Hr />
             </div>
    </>
  )
}

export default Details;
