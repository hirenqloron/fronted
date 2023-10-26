import React from "react";
import { Card } from "@mui/material";
import styles from "./connections.module.css";
const Connections = () => {
  return (
    <div className={styles.main}>
      <Card className={styles.card1}>
        <h1>Connected Accounts</h1>{" "}
        <h5>Display content from your connected accounts on your site</h5>
      </Card>
      <Card className={styles.card1}>
        <h1>Social Accounts</h1>{" "}
        <h5>Display content from social accounts on your site</h5>
      </Card>
    </div>
  );
};

export default Connections;
