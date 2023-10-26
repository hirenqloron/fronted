import React, { useState } from "react";
import "./me.css";
import Leave from "./Leave/Leave";
import Attendance from "./Attendance/Attendance";

const Me = () => {
  const [selectedOption, setSelectedOption] = useState("Leave");

  const handleChangeOption = (option) => {
    setSelectedOption(option);
    console.log("setting selected option");
  };

  return (
    <div className="main-me-container">
      <div className="section-1 me-section">
        <div className="home-page me-page">
          <p
            className={`selecional-ooption ${
              selectedOption === "Leave" ? "active-option" : ""
            }`}
            onClick={() => handleChangeOption("Leave")}
          >
            Leave
          </p>
          <p
            className={`selecional-ooption ${
              selectedOption === "Attendance" ? "active-option" : ""
            }`}
            onClick={() => handleChangeOption("Attendance")}
          >
            Attendance
          </p>
        </div>
      </div>
      {selectedOption === "Leave" && <Leave />}
      {selectedOption === "Attendance" && <Attendance />}
    </div>
  );
};

export default Me;
