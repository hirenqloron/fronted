import React from "react";
import styles from "./Security.module.css";
import { Card } from "@mui/material";
import Input from "./../../../../components/Input/Input";
const Security = () => {
  return (
    <div>
      <Card className={styles.card1}>
        <h1>Change Password</h1>
        <form action="">
          <Input type="password" width="90%" label="Current Password" />
          <Input type="password" width="90%" label="New Password" />
          <Input type="password" width="90%" label="Confirm Password" />
        </form>
        <div className={styles.d1}>
            <h6>Password Requirements :</h6>
          <ul>
            <li>Minimum 8 characters long - the more, the better</li>{" "}
            <li>At least one lowercase & one uppercase character</li>
            <li>At least one number, symbol, or whitespace character</li>
          </ul>
        </div>
        <div className={styles.btnDiv}>
          <button className={styles.btn1}>Save Changes</button>
          <button className={styles.btn2}>Reset</button>
        </div>
      </Card>
    </div>
  );
};

export default Security;
