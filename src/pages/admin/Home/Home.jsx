import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Summary from "./Summary/Summary";
import Feature from "./feautures/Feature";
import Qloronsetupnav from "./qloronsetupnavbar/Qloronsetupnav";
import Sidebar from "./projectupdates/Sidebar";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Qloronsetup");
  const navigate = useNavigate();
  

  const handleadminOption = (option) => {
    setSelectedOption(option);
    console.log(option, "setting selected option");
  };

  return (
    <>
      <div className="adminhome-nav">
        <p
          className={`admin-option ${
            selectedOption === "Qloronsetup" ? "selected-option" : ""
          }`}
          onClick={() => handleadminOption("Qloronsetup")}
        >
          Qloron Setup
        </p>
        <p
          className={`admin-option ${
            selectedOption === "Welcome" ? "selected-option" : ""
          }`}
          onClick={() => handleadminOption("Welcome")}
        >
          Welcome
        </p>
        <p
          className={`admin-option ${
            selectedOption === "Dashboard" ? "selected-option" : ""
          }`}
          onClick={() => handleadminOption("Dashboard")}
        >
          Dashboard
        </p>
        <p
          className={`admin-option ${
            selectedOption === "Projectupdates" ? "selected-option" : ""
          }`}
          onClick={() => handleadminOption("Projectupdates")}
        >
          Project Updates
        </p>
        <p
          className={`admin-option ${
            selectedOption === "Supportinfo" ? "selected-option" : ""
          }`}
          onClick={() => handleadminOption("Supportinfo")}
        >
          Support Info
        </p>
      </div>

      {selectedOption === "Qloronsetup" && <Qloronsetupnav />}
      {selectedOption === "Projectupdates" && <Sidebar />}
    
      {/*{selectedOption === "Previous" && <PreviousName />}

      {selectedOption === "Form" && <Form12bb />}
      {selectedOption === "TaxFilling" && <Taxfilling />}
      {selectedOption === "TaxSaving" && <Taxsavingadv />} */}
    </>
  );
};
export default Home;
