import React, { useEffect, useState } from "react";
import styles from "./Expenseandtravel.module.css";
import correctsign from "../../../../../image/correctsign.svg";
import playimg from "../../../../../image/playimg.svg";
import boyimg from "../../../../../image/boyimg.svg";
import leftarrowpurple from "../../../../../image/leftarrowpurple.svg";
import rightarrowpurple from "../../../../../image/rightarrowpurple.svg";
import Cross from "../../../../../image/Cross.svg";

const Expenseandtravel= () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
   setPopupVisible(!isPopupVisible);
 };
 const handleClose = () => {
   setPopupVisible(false);
 };

   return (
    <div className={styles.coremain}>
      <div className={styles.corehr}>
        <div style={{ display: "flex" }}>
          <div className={styles.corehrheading}>
            <p>Expense & Travel </p>
            <p>
            Expense and travel policies and settings </p>
          </div>
          <div className={styles.owner}>
          <p onClick={togglePopup}>+ Add Owner</p>
          </div>
        </div>
        <div className={styles.setuptasks}>
          <p style={{ margin: "0" }}>Setup Tasks</p>
        </div>
         <div className={styles.box1}>
          <p>
            <img
              style={{ marginTop: "3px", marginLeft: "12px" }}
              src={playimg}
            />
          </p>
          <div className={styles.box1data}>
            <p>Configure expense & travel settings </p>
            <p>
            Setup expense categories, travel policies and other settings</p>
          </div>
          <div className={styles.completeddate2}>
            <p>Due on Jun 12</p>
            <p>(92 days delay)</p>
          </div>
        </div>
   
        <div className={styles.headingdata}>
          <p>Data Imports</p>
        </div>
        <div className={styles.box12}>
            <p>No data import tasks available</p>
         </div>

      </div>
      <div className={styles.coresecondbox}>
        <p className={styles.actheading}>Activity</p>
  
            <div className={styles.activity}>
              <p>
              No activity logins yet
              </p>

            </div>
        <div className={styles.pagination}>
          <p>
            <img src={leftarrowpurple} />
          </p>
          <p>1 / 1</p>
          <p>
            <img src={rightarrowpurple} />
          </p>
        </div>
      </div>
      {isPopupVisible && <div className={styles.popupbackdrop}></div>}

{isPopupVisible && (
<div className={styles.popupbox}>
<div className={styles.popupscreen}>
<p>Add Owners</p>
<p className={styles.crossimg} onClick={handleClose}>
          <img src={Cross} />
        </p>

</div>
<div className={styles.popupdata}>
<p>Who will be responsible for this setup?</p>
</div>
<div className={styles.ownershead}>
<p>Owners</p>
</div>
<div className={styles.popupinput}>
<input type='search' placeholder='Search Employee....'/>
</div>
<div className={styles.popupcancel}>
<p>Cancel</p>
<p>Save</p>
</div>
</div>
)}

    </div>
  );
};

export default Expenseandtravel;
