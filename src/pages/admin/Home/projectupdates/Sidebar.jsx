import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import AllProducts from "./allproducts/AllProducts";
import Leave from "./leave/Leave";
import QloronApi from "./qloronapi/QloronApi";
import QloronPerform from "./Qloronperform/QloronPerform";
import Platform from "./platform/Platform";
import HelpDesk from "./helpdesk/HelpDesk";
import Expenses from "./expenses/Expenses";
import QloronHire from "./qloronhire/QloronHire";
import Assets from "./assets/Assets";
import Mobileapp from "./mobileapp/Mobileapp";
import Corehr from "./corehr/Corehr";
import Timesheet from "./timesheet/Timesheet";
import Engage from "./engage/Engage";
import Attendance from "./attendance/Attendance";
import Payroll from "./payroll/Payroll";
import Documents from "./documents/Documents";
import Other from "./other/Other";
const components = {
    "All Products": AllProducts,
    "Leave": Leave,
    "Qloron API": QloronApi,
    "Qloron Perform": QloronPerform,
    "Platform": Platform,
    "Helpdesk": HelpDesk,
    "Expenses": Expenses,
    "Qloron Hire": QloronHire,
    "Assets": Assets,
    "Mobile App": Mobileapp,
    "Core HR": Corehr,
    "Timesheet": Timesheet,
    "Engage": Engage,
    "Attendance": Attendance,
    "Payroll": Payroll,
    "Documents": Documents,
    "Other": Other,
  };
  
const Sidebar = () => {
    
  const allProductsList = [
    "All Products",
    "Leave",
    "Qloron API",
    "Qloron Perform",
    "Platform",
    "Helpdesk",
    "Expenses",
    "Qloron Hire",
    "Assets",
    "Mobile App",
    "Core HR",
    "Timesheet",
    "Engage",
    "Attendance",
    "Payroll",
    "Documents",
    "Other"
  ];
 
  const [selectedItem, setSelectedItem] = useState("All Products");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const SelectedComponent = components[selectedItem];

  return (
    <div>
      <div className={styles.productupdateshead}>
        <p>Qloron Product Updates</p>
        <p>
          Latest updates on Qloron product. Not all employees see this page.
          Only privileged users like you have access.
        </p>
      </div>
      <div className={styles.sidebarflex}>
        <div className={styles.sidebar}>
          <ul className={styles.sidebarlist}>
            <li>PRODUCTS</li>
            {allProductsList.map((item) => (
              <li
                key={item}
                className={selectedItem === item ? styles.selectedListItem : ""}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          <SelectedComponent />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
