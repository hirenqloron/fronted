import React from 'react'
import styles from "./Houseproperty.module.css";
import house from  "../../../../image/house.svg";
const Houseproperty = () => {
  return (
    <div>
      <div>
        <p className={styles.housingheading}>House Property</p>
        <p className={styles.housingdata}>
          Here you can declare all the house property rented or owned.
        </p>
      </div>
      <div className={styles.maindiv}>
        <div className={styles.housingpartybox1}>
          <p className={styles.housingboxcont}>I live in a rented residence</p>
          <p className={styles.housingboxcont1}>
            There are no rental details available.
          </p>
        </div>
        <br />
        <div className={styles.housingpartybox2}>
          <div className={styles.imgwithheading}>
            <p>
              <img className={styles.houseimage} src={house} />
            </p>
            <p>House property declaration</p>
          </div>
          <ul className={styles.housinglist}>
            <li>
              You can add more than one rented property or own property for the
              current financial year.{" "}
            </li>
            <li>
              For rented property if the total rent is more than ₹ 1,00,000 then
              you need to provide either PAN of owner or declaration letter.
            </li>
            <li>
              For rented property you are eligible for HRA and In case HRA is
              not paid by your employer you will be eligible for exemption under
              80 GG.
            </li>
            <li>
              For own property/residence you will be eligible for house loan
              interest exemption under Section 24.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.housingpartybox3}>
        <p className={styles.housingboxcont}>I own residence</p>
        <p className={styles.housingboxcont1}>
          There are no own residence details available.
        </p>
      </div>
    </div>
  );
}

export default Houseproperty;