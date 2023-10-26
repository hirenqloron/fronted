import React, { useState } from "react";
import styles from "./Timeline.module.css";
import { Card } from "@mui/material";
import { ReactSVG } from "react-svg";
import globe from "../../../../image/globe.svg";
import Divider from "@mui/material/Divider";
const Timeline = () => {
  return (
    <div>
      <Card className={styles.timeline}>
        <div>
          <h1>Timeline</h1>
          <div className={styles.contentDiv}>
            {" "}
            <div className={styles.content}>
              <h3>2023</h3>

              <div className={styles.divider}></div>
              <ReactSVG className={styles.svgDiv} src={globe} />
            </div>
            <div className={styles.data}>
              <h2>Joined QLORON PVT LTD</h2>
              <p>21 Aug, 2023</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Timeline;
