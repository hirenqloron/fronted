import React from "react";
import styles from "./SavedCard.module.css";
import { ReactSVG } from "react-svg";
import visa from "../../image/visa.svg";

const SavedCard = ({ cardData }) => {
  const displayDiv = cardData.map((item) => {
   return <div className={styles.main}>
      <div name="left">
        {" "}
        <div name="icon" className={styles.icon}>
         {item.icon ? <ReactSVG src={item.icon} /> :  <>
            <div className={styles.c1}></div>
            <div className={styles.c2}></div>
          </> }
        </div>
        <div className={styles.headDiv}>
          {" "}
          <h1>{item.name}</h1>
          <p>{item.isPrimary ? "Primary" : "Secondary"}</p>
        </div>
        <h3 className={styles.cardNo}>**** **** **** {item.lastDigitOfCardNo}</h3>
      </div>
      <div className={styles.right} name="right">
        <div className={styles.btnDiv}>
          <button className={styles.btn1}>Edit</button>
          <button className={styles.btn2}>Delete</button>
        </div>
        <p className={styles.expiry}>card expires at {item.expiry}</p>
      </div>
    
    </div>;
  });
  return (
    <div className={styles.one} >
      <h1 className={styles.heading}>My Cards</h1>
      {displayDiv}  
    </div>
  );
};

export default SavedCard;
