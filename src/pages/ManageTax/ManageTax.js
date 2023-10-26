import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageTax.css";
import Declaration from "./Declaration/Declaration";
import Form12bb from "../MyFinance/Form12bb/Form12bb";
import Taxfilling from "../MyFinance/Taxfilling/Taxfilling";
import Taxsavingadv from "../MyFinance/Taxsaving/Taxsavingadv";
import PreviousName from "../MyFinance/previosuname/PreviousName";
const ManageTax = () => {
  const [selectedOption, setSelectedOption] = useState("Declaration");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/mypay/mysalary");
  };
  const handleClick1 = () => {
    navigate("/myfinance/summary");
  };

  const handleManageOption = (option) => {
    setSelectedOption(option);
    console.log(option, "setting selected option");
  };

  return (
    <>
      <div className="summary-bar">
        <p onClick={handleClick1}>
          SUMMARY
        </p>
        <p onClick={handleClick} className="mypay">
          MY PAY
        </p>
        <p className="managetax">MANAGE TAX</p>
      </div>

      <div className="managetax-nav">
        <p
          className={`manage-option ${
            selectedOption === "Declaration" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("Declaration")}
        >
          DECLARATION
        </p>
        <p
          className={`manage-option ${
            selectedOption === "Previous" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("Previous")}
        >
          PREVIOUS NAME
        </p>
        <p
          className={`manage-option ${
            selectedOption === "Form" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("Form")}
        >
          FORM 12 BB
        </p>
        <p
          className={`manage-option ${
            selectedOption === "TaxFilling" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("TaxFilling")}
        >
          TAX FILLING
        </p>
        <p
          className={`manage-option ${
            selectedOption === "TaxSaving" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("TaxSaving")}
        >
          TAX SAVING INVESTMENT
        </p>
      </div>
      {selectedOption === "Declaration" && <Declaration />}
      {selectedOption === "Previous" && <PreviousName />}

      {selectedOption === "Form" && <Form12bb />}
      {selectedOption === "TaxFilling" && <Taxfilling />}
      {selectedOption === "TaxSaving" && <Taxsavingadv />}
    </>
  );
};
export default ManageTax;
