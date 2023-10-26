import React, { useEffect, useState } from "react";
import styles from "./QloronHire.module.css";
import hrgirlimg from "../../../../../image/hrgirlimg.svg";
const QloronHire = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const row = [
      {
        id: "1",
        name: "Snehal Baraskar",
        projectHeading: "Qloron’s API Access Key Expiration",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
      {
        id: "2",
        name: "Snehal Baraskar",
        projectHeading: "Qloron API to show review cycles, review groups and reviews",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
      {
        id: "3",
        name: "Snehal Baraskar",
        projectHeading: "Qloron API to show badges, praises post praises, show time frame, goals and goal’s process",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
     ];
    setData(row);

  },[]);
  return (
    <div>
        {data.map((ele)=>(
      <div className={styles.productbox1}>
      <div className={styles.projecttitle}>
                <p>{ele.projectHeading}</p>
                </div>
                <div className={styles.projecthr}>
                    <p><img src={hrgirlimg}/></p>
                   <p>{ele.name}</p> 
                   <p>{ele.dateandtime}</p> 
                   <p></p> 
                </div>
                <div className={styles.projectdata}><p>{ele.data}</p></div>
                <div className={styles.readmore}><p>READ MORE... </p></div>
                </div>
        ))}
        <div className={styles.questionmark}><p>?</p></div>
      </div>
  );
};

export default QloronHire;
