import { Card } from "@mui/material";
import React from "react";
import styles from "./wallActivity.module.css";
import workImg from "../../../../image/wallActivty.svg";
import { ReactSVG } from "react-svg";
const WallActivity = () => {
  return (
    <div>
      <Card className={styles.wallActivity}>
        <div className={styles.main}>
          {" "}
          <ReactSVG src={workImg} />
    <div className={styles.contentDiv}>
        <h1>No Activity Found </h1>
        <h2>Content created by you from the <span>wall</span> can be shown here</h2>
    </div>
        </div>
      </Card>
    </div>
  );
};

export default WallActivity;
