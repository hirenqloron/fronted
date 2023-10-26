import React from "react";
import styles from "./Notifications.module.css";
import { Card } from "@mui/material";
import CustomizedTables from "../../../../components/Table/Table";
const Notifications = () => {
  return (
    <div>
      <Card className={styles.card}>
        <h1>Recent Devices</h1>
        <div className={styles.d1}>
          {" "}
          <h6>We need permission from your browser to show notifications. </h6>
          <p>Request Permission</p>
        </div>
        <CustomizedTables />
        <form>
          <h1>When should we send you notifications?</h1>
          <input type="text" placeholder="Only when i’m online" />
          <div className={styles.btnDiv}>
            <button className={styles.btn1}>Save Changes</button>
            <button className={styles.btn2}>Reset</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Notifications;
