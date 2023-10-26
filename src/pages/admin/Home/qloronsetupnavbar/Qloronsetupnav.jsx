import React ,{useState}from 'react'
import "./Qloronsetupnav.css";
import Feature from '../feautures/Feature';
import Summary from '../Summary/Summary';
const Qloronsetupnav = () => {
 
  const [selectedOption, setSelectedOption] = useState("Summary");
 
  const handleManageOption = (option) => {
    setSelectedOption(option);
    console.log(option, "setting selected option");
  };
  return (
    <div>
      <div className="admhome">
        <p
          className={`admin-option1 ${
            selectedOption === "Summary" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("Summary")}
        >
          Summary
        </p>
        <p
          className={`admin-option1 ${
            selectedOption === "Features" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("Features")}
        >
          Features
        </p>
      </div>
      {selectedOption === "Summary" && <Summary />}
      {selectedOption === "Features" && <Feature/>}

      {/* <div
          className={styles.borderBottom}
          style={{ left: isFeaturesClicked ? "7%" : "0" }}
        />
      </div> */}
    </div>
  );
}

export default Qloronsetupnav