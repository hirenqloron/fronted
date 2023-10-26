import React, { useState } from "react";
import styled from "./employee.module.css";
import EmployeeDirectory from "./EmployeeDirectory/EmployeeDirectory";

const EmployeeDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("EmployeeDirectory");

  const handleChangeOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className={styled.mainDashBar}>
        <p
          onClick={() => handleChangeOption("EmployeeDirectory")}
          className={`${styled.navbar} ${
            selectedOption === "EmployeeDirectory" ? styled.activeOption : ""
          }`}
        >
          Employee Directory
        </p>
        <p
          onClick={() => handleChangeOption("OrganizationTree")}
          className={`${styled.navbar} ${
            selectedOption === "OrganizationTree" ? styled.activeOption : ""
          }`}
        >
          Organization Tree
        </p>
      </div>
      <div>
        {selectedOption === "EmployeeDirectory" ? <EmployeeDirectory /> : null}
      </div>
    </>
  );
};

export default EmployeeDashboard;
