import React ,{useState,useEffect}from 'react'
import styles from "./CustomRoles.module.css";
import correctsign from "../../../../../image/correctsign.svg";
import playimg from "../../../../../image/playimg.svg";
import boyimg from "../../../../../image/boyimg.svg";
import leftarrowpurple from "../../../../../image/leftarrowpurple.svg";
import rightarrowpurple from "../../../../../image/rightarrowpurple.svg";
import Cross from "../../../../../image/Cross.svg";

const CustomRoles = () => {
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
        
      
      ];
      setData(row);
    }, []);

  return (
    <div className={styles.coremain}>
      <div className={styles.corehr}>
        <div style={{ display: "flex" }}>
          <div className={styles.corehrheading}>
            <p>Custom Roles & Permissions</p>
            <p>
            Customizable roles & Permissions            </p>
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
            <p>Configure implicit roles permission and create new use....</p>
            <p>
            Configure the permissions for all roles and create new roles           </p>
          </div>
          <div className={styles.completeddate}>
            <p>Completed on Jun 06</p>
          </div>
        </div>
        <div className={styles.headingdata}>
          <p>Data Imports</p>
        </div>
         <div className={styles.box12}>
            <p>No data import tasks available</p>
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
          <p><img src={leftarrowpurple}/></p>
          <p>1 / 1</p>
          <p><img src={rightarrowpurple}/></p>
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
    
  )
}

export default CustomRoles
