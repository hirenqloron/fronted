import React, { useEffect, useState } from "react";
import styles from "./Qloronperform.module.css";
import hrgirlimg from "../../../../../image/hrgirlimg.svg";
const QloronPerform = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const row = [
      {
        id: "1",
        name: "Snehal Baraskar",
         projectHeading: "Manage tax section will be hidden by default in the mobile app if employee is a part of legal entity where Currency is not INR",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
      {
        id: "2",
        name: "Snehal Baraskar",
        projectHeading: "Mobile UI Enhencements for better experience.",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
      {
        id: "3",
        name: "Snehal Baraskar",
        projectHeading: "User Interface Enhancement of employee profile page in mobile app",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
      {
        id: "4",
        name: "Snehal Baraskar",
         projectHeading: "Gender can’t be kept as “Undisclosed” now!",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
      {
        id: "5",
        name: "Snehal Baraskar",
         projectHeading: "Automatic remote clock-in/out based on geolocation",
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

export default QloronPerform;
