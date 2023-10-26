import React, { useEffect, useState } from "react";
import styles from "./AllProducts.module.css";
import hrgirlimg from "../../../../../image/hrgirlimg.svg";
const AllProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const row = [
      {
        id: "1",
        name: "Snehal Baraskar",
        status:"Upcoming",
        ProjectmainHead:"STATIC INVOICE PRODUCT UPDATE: ",
        projectHeading: "Generation of Static invoices in billing portal",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
      {
        id: "2",
        name: "Snehal Baraskar",
        projectHeading: "Introduction of new compliance forms under central section along with the ability to search compliance forms across states/sections",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
      {
        id: "3",
        name: "Snehal Baraskar",
        projectHeading: "Download generated letters in bulk",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
      {
        id: "4",
        name: "Snehal Baraskar",
        status:"Upcoming",
        projectHeading: "Set future effective date for job title changes",
        dateandtime: "On Jul 07, 2023 ",
        data: "Yorem ipsum dolor sit amet.libero et velt interdum,ac .Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taci sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per elit...",
      },
      {
        id: "5",
        name: "Snehal Baraskar",
        status:"Upcoming",
        projectHeading: "Minor Updates: Enhancements in Reports and My Tasks",
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
                   {ele.status && (
              <p className={styles.status}>Status: {ele.status}</p>
            )}
                </div>
                <div className={styles.projectdata}><p>{ele.data}</p></div>
                <div className={styles.readmore}><p>READ MORE... </p></div>
                </div>
        ))}
        <div className={styles.questionmark}><p>?</p></div>
      </div>
  );
};

export default AllProducts;
