import React, { useState } from "react";
import styles from "./about.module.css";
import { Card } from "@mui/material";
import Summary from "./Summary/Summary";
import Timeline from "./Timeline/Timeline";
import WallActivity from "./WallActivity/WallActivity";
const About = () => {
  const [displayed, setDisplayed] = useState("summary");

  const handleRedirection = (name) => {
    setDisplayed(name);
  };

  return (
    <div className={styles.main}>
      <Card>
        {" "}
        <div className={styles.d1}>
          {" "}
          <h2 className={displayed  == "summary" ? styles.btnActive : styles.btn} onClick={() => handleRedirection("summary")}>Summary</h2>{" "}
          <h2 className={displayed == "timeline" ? styles.btnActive : styles.btn}  onClick={()=>handleRedirection("timeline")}>Timeline</h2> 
          <h2 className={displayed == "wall" ? styles.btnActive : styles.btn}  onClick={()=>handleRedirection("wall")}>Wall Activity</h2>
        </div>
      </Card>
   { displayed == "summary" &&  <Summary />}
   { displayed == "timeline" &&   <Timeline />}
   { displayed == "wall" &&  <WallActivity />}
    </div>
  );
};

export default About;
