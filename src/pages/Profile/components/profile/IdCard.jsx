import React from "react";
import styles from "./IdCard.module.css";
import { Card } from "@mui/material";
import userImg from "../../../../image/Ash-Read.png";

const IdCard = () => {
  return (
    <div className={styles.translucentDiv}>
      <div><h1>Digital ID Preview</h1> </div>
      
      <Card className={styles.card}>
        <img src={userImg} alt="Image" width={177} height={177} />
        <div>
          {" "}
          <h2>James Ferguison</h2>
          <h3>Graphic Designer</h3>
          <h4>QT000123</h4>
        </div>
        <div className={styles.d2Main}>
          <div>
            {" "}
            <h4>Department</h4> <h4>Location</h4> <h4>Blood Group</h4>{" "}
          </div>
          <div>
            {" "}
            <p>:</p> <p>:</p> <p>:</p>
          </div>
          <div>
            {" "}
            <h5>Software Development</h5>
            <h5>Hyderabad, India</h5>
            <h5>O+ (O Positive) </h5>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IdCard;
