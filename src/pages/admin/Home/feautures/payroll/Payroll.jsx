import React, { useEffect, useState } from "react";
import styles from "./Payroll.module.css";
import correctsign from "../../../../../image/correctsign.svg";
import playimg from "../../../../../image/playimg.svg";
import boyimg from "../../../../../image/boyimg.svg";
import leftarrowpurple from "../../../../../image/leftarrowpurple.svg";
import rightarrowpurple from "../../../../../image/rightarrowpurple.svg";
import Cross from "../../../../../image/Cross.svg";

const Payroll = () => {
  const [data, setData] = useState([]);
       const [isPopupVisible, setPopupVisible] = useState(false);
     const togglePopup = () => {
      setPopupVisible(!isPopupVisible);
    };
    const handleClose = () => {
      setPopupVisible(false);
    };

  useEffect(() => {
    const row = [
      {
        id: 1,
        name: "Nikhilesh Mandal",
        task: "’Add employee personal details import’completed with the following reason:",
        time: "Jun 23, 2023 at 4:09 pm ",
      },
      {
        id: 2,
        name: "Nikhilesh Mandal",
        task: "’Add employee personal details import’completed with the following reason:",
        time: "Jun 23, 2023 at 4:09 pm ",
      },
      {
        id: 3,
        name: "Nikhilesh Mandal",
        task: "’Add employee personal details import’completed with the following reason:",
        time: "Jun 23, 2023 at 4:09 pm ",
      },
      {
        id: 4,
        name: "Nikhilesh Mandal",
        task: "’Add employee personal details import’completed with the following reason:",
        time: "Jun 23, 2023 at 4:09 pm ",
      },
      {
        id: 5,
        name: "Nikhilesh Mandal",
        task: "’Add employee personal details import’completed with the following reason:",
        time: "Jun 23, 2023 at 4:09 pm ",
      },
      {
        id: 6,
        name: "Nikhilesh Mandal",
        task: "’Add employee personal details import’completed with the following reason:",
        time: "Jun 23, 2023 at 4:09 pm ",
      },
      {
        id: 7,
        name: "Nikhilesh Mandal",
        task: "’Add employee personal details import’completed with the following reason:",
        time: "Jun 23, 2023 at 4:09 pm ",
      },
      {
        id: 8,
        name: "Nikhilesh Mandal",
        task: "’Add employee personal details import’completed with the following reason:",
        time: "Jun 23, 2023 at 4:09 pm ",
      },
      {
        id: 9,
        name: "Nikhilesh Mandal",
        task: "’Add employee personal details import’completed with the following reason:",
        time: "Jun 23, 2023 at 4:09 pm ",
      },
    ];
    setData(row);
  }, []);
  return (
    <div className={styles.coremain}>
      <div className={styles.corehr}>
        <div style={{ display: "flex" }}>
          <div className={styles.corehrheading}>
            <p>Payroll</p>
            <p>
            Payroll setup and processing</p>
          </div>
          <div className={styles.owner}>
          <p onClick={togglePopup}>+ Add Owner</p>
          </div>
        </div>
        <div className={styles.setuptasks}>
          <p style={{ margin: "0" }}>Setup Tasks</p>
        </div>
        <div className={styles.box1}>
          <p>
            <img
              style={{ marginTop: "3px", marginLeft: "12px" }}
              src={correctsign}
            />
          </p>
          <div className={styles.box1data}>
            <p>Payroll setup and payslip settings</p>
            <p>
            Configure payroll settings           </p>
          </div>
          <div className={styles.completeddate1}>
            <p>Completed on Jun 06</p>
          </div>
        </div>
        <div className={styles.box1}>
          <p>
            <img
              style={{ marginTop: "3px", marginLeft: "12px" }}
              src={correctsign}
            />
          </p>
          <div className={styles.box1data}>
            <p>Leave encashment and payment setup</p>
            <p>
            Setup leave encashment policies and payment settings          </p>
          </div>
          <div className={styles.completeddate2}>
            <p>Completed on Jun 06</p>
          </div>
        </div>
        <div className={styles.box1}>
          <p>
            <img
              style={{ marginTop: "3px", marginLeft: "12px" }}
              src={correctsign}
            />
          </p>
          <div className={styles.box1data}>
            <p>Payroll run</p>
            <p>
            Various tasks and actions to run payroll</p>
          </div>
          <div className={styles.completeddate3}>
            <p>Completed on Jun 06</p>
          </div>
        </div>
        <div className={styles.headingdata}>
          <p>Data Imports</p>
        </div>
        <div className={styles.box1}>
          <p>
            <img
              style={{ marginTop: "3px", marginLeft: "12px" }}
              src={correctsign}
            />
          </p>
          <div className={styles.box1data}>
            <p>Import employee current salary</p>
            <p>
            0 Uploads            </p>
          </div>
          <div className={styles.completeddate4}>
            <p>Completed on Jun 06</p>
          </div>
        </div>
        <div className={styles.box1}>
          <p>
            <img
              style={{ marginTop: "3px", marginLeft: "12px" }}
              src={correctsign}
            />
          </p>
          <div className={styles.box1data}>
            <p>Import employee previous salary</p>
            <p>
            0 Uploads            </p>
          </div>
          <div className={styles.completeddate5}>
            <p>Completed on Jun 06</p>
          </div>
        </div>
        <div className={styles.box1}>
          <p>
            <img
              style={{ marginTop: "3px", marginLeft: "12px" }}
              src={correctsign}
            />
          </p>
          <div className={styles.box1data}>
            <p>Import bonus with payout date</p>
            <p>
            1 Uploads            </p>
          </div>
          <div className={styles.completeddate6}>
            <p>Completed on Jun 06</p>
          </div>
        </div>
        <div className={styles.box1}>
          <p>
            <img
              style={{ marginTop: "3px", marginLeft: "12px" }}
              src={correctsign}
            />
          </p>
          <div className={styles.box1data}>
            <p>Import financial information</p>
            <p>
        1 Uploads</p>
          </div>
          <div className={styles.completeddate7}>
            <p>Completed on Jun 06</p>
          </div>
        </div>
        <div className={styles.box1}>
          <p>
            <img
              style={{ marginTop: "3px", marginLeft: "12px" }}
              src={correctsign}
            />
          </p>
          <div className={styles.box1data}>
            <p>Invest declaration import</p>
            <p>
            1 Uploads        </p>
          </div>
          <div className={styles.completeddate8}>
            <p>Completed on Jun 06</p>
          </div>
        </div>

      </div>
      <div className={styles.coresecondbox}>
        <p className={styles.actheading}>Activity</p>
        {data.map((ele) => (
          <>
            <div className={styles.activity}>
              <p>
                <img src={boyimg} />
              </p>
              <p>{ele.name}</p>
              <p>{ele.time}</p>
            </div>
            <div className={styles.taskdata}>
              <p>Task:{ele.task}</p>
            </div>
          </>
        ))}
        <div className={styles.pagination}>
          <p>
            <img src={leftarrowpurple} />
          </p>
          <p>1 / 1</p>
          <p>
            <img src={rightarrowpurple} />
          </p>
        </div>
      </div>
      {isPopupVisible && <div className={styles.popupbackdrop}></div>}

{isPopupVisible && (
<div className={styles.popupbox}>
<div className={styles.popupscreen}>
<p>Add Owners</p>
<p className={styles.crossimg} onClick={handleClose}>
          <img src={Cross} />
        </p>

</div>
<div className={styles.popupdata}>
<p>Who will be responsible for this setup?</p>
</div>
<div className={styles.ownershead}>
<p>Owners</p>
</div>
<div className={styles.popupinput}>
<input type='search' placeholder='Search Employee....'/>
</div>
<div className={styles.popupcancel}>
<p>Cancel</p>
<p>Save</p>
</div>
</div>
)}

    </div>
  );
};

export default Payroll;
