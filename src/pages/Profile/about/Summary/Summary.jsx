import React, { useState } from "react";
import styles from "./summary.module.css";
import { Card } from "@mui/material";
import RichTextEditor from "../../../../components/TextEditor/Textarea";
const Summary = () => {
  const [viewBtn, setViewBtn] = useState({
    btn1: true,
    btn2: true,
    btn3: true,
  });

  const handleClick = (event, value) => {
    const name = event.target.name; // Use event.target.name to get the button name

    setViewBtn((prev) => ({
      ...prev,
      [name]: value, // Update the specific button's value
    }));
  };

  return (
    <div>
      <Card className={styles.summary1}>
        <div>
          <h3>About</h3>
          {viewBtn.btn1? <button name="btn1" onClick={(e) => handleClick(e, !viewBtn.btn1)}>Add your Response</button>: <RichTextEditor></RichTextEditor>}
         
        </div>
        <div>
          <h3>What I love about my Job?</h3>
          {viewBtn.btn2? <button name="btn2" onClick={(e) => handleClick(e, !viewBtn.btn2)}>Add your Response</button> : <RichTextEditor></RichTextEditor>} 
          
        </div>
        <div>
          <h3>My interests and hobbies?</h3>
          {viewBtn.btn3? <button name="btn3" onClick={(e) => handleClick(e, !viewBtn.btn3)}>Add your Response</button>:<RichTextEditor></RichTextEditor> } 
          
        </div>
      </Card>
      <Card className={styles.summary2}>
        <div>
          <h3 className={styles.title}>Primary Details</h3>
          <div className={styles.grid}>
            <span>
              <h6>FIRST NAME</h6>
              <p>James</p>
            </span>
            <span>
              <h6>LAST NAME</h6>
              <p>Ferguison</p>
            </span>
            <span>
              <h6>GENDER</h6>
              <p>Male</p>
            </span>
            <span>
              <h6>DATE OF BIRTH</h6>
              <p>28-09-1999</p>
            </span>
            <span>
              <h6>MARITAL STATUS</h6>
              <p>Single</p>
            </span>
            <span>
              <h6>PHYSICALLY HANDICAPPED</h6>
              <p>No</p>
            </span>
          </div>
        </div>
        <div>
          <h3 className={styles.title}>Education</h3>
          <h4 className={styles.subTitle}>Degree & Certificates</h4>
          <div className={styles.grid}>
            <span>
              <h6>BRANCH / SPECIALIZATION </h6>
              <p>Accounts & Commerce</p>
            </span>
            <span>
              <h6>CGPA / PERCENTAGE</h6>
              <p>7.2</p>
            </span>
            <span>
              <h6>DEGREE</h6>
              <p>B.com Computers</p>
            </span>
            <span>
              <h6>UNIVERSITY / COLLEGE</h6>
              <p>Acharya Nagarjuna University</p>
            </span>
            <span>
              <h6>YEAR OF COMPLETION</h6>
              <p>2021</p>
            </span>
            <span>
              <h6>YEAR OF JOINING</h6>
              <p>2018</p>
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Summary;
