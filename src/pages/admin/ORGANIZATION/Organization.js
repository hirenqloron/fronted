import React, { useState } from "react";
import styled from "./organization.module.css";
import OrganizationDashboard from "./OrganizationDashboard/OrganizationDashboard";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard";
import SideBar from "../../../components/sideBar/SideBar";
const Organization = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const handleChangeOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className={styled.organizationApp}>
        <div className="section-1 me-section">
          <div className="home-page me-page">
            <p
              className={`${styled.selecionalOoption} ${
                selectedOption === "Dashboard" ? styled.activeOption : ""
              }`}
              onClick={() => handleChangeOption("Dashboard")}
            >
              DASHBOARD
            </p>
            <p
              className={`${styled.selecionalOoption} ${
                selectedOption === "Employees" ? styled.activeOption : ""
              }`}
              onClick={() => handleChangeOption("Employees")}
            >
              EMPLOYEES
            </p>
            <p className={`${styled.selecionalOoption}`}>ORG STRUCTURE</p>
            <p className={`${styled.selecionalOoption}`}>ONBOARDING</p>
            <p className={`${styled.selecionalOoption}`}>EXITS</p>
            <p className={`${styled.selecionalOoption}`}>EXPENSES & TRAVEL</p>
            <p className={`${styled.selecionalOoption}`}>DOCUMENTS</p>
            <p className={`${styled.selecionalOoption}`}>HELP DESK</p>
            <p className={`${styled.selecionalOoption}`}>HIRING</p>
            <p className={`${styled.selecionalOoption}`}>SETTINGS</p>
          </div>
        </div>
        <div>
          {selectedOption === "Dashboard" ? (
            <OrganizationDashboard />
          ) : selectedOption === "Employees" ? (
            <EmployeeDashboard />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Organization;
