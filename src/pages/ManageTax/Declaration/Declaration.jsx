import { React, useState } from "react";
import "./Declaration.css";
import Bulb from "../../../image/bulb.svg";
import DecMydec from "./Mydeclaration/DecMydec";
import Incomeothersou from "./Incomeothersource/Incomeothersou";
import Houseproperty from "./Houseprop/Houseproperty";
import Taxsavingallo from "./Taxsavingallowance/Taxsavingallo";
import Otherdeduc from "./Otherdeduc/Otherdeduc";
import LacDeduction from "./Lacdeduction/LacDeduction";

const Declaration = () => {
  const [selectedOption, setSelectedOption] = useState("MyDeclaration");

  const handleManageOption = (option) => {
    setSelectedOption(option);
    console.log(option, "setting selected option");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <h2 className="declaration">Declaration</h2>
        <div className="selectitem">
          <select
            className="formselectlg"
            //aria-label=".form-select-lg example"
          >
            <option className="optionmenu" selected>
              APR 2023 - MAR 2024
            </option>
          </select>
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "flex-start" }}
        className="importantCard"
      >
        <div>
          <img src={Bulb} alt="bulb-img" className="bulbImg" />
        </div>
        <div className="deccard">
          <p style={{ margin: "18px 0px 12px 0px" }}>Important!</p>
          <ul style={{ paddingLeft: "14px", margin: "12px 0px 12px 12px" }}>
            <li style={{ marginTop: "10px" }}>
              '$' - Not considered for exemption if opted for New tax regime
              (Section 115BAC).
            </li>
            <li style={{ marginTop: "10px" }}>
              You can declare your investment amount from 1st to 22nd of every
              month until the cutoff date of Jan 22, 2024.
            </li>
            <li style={{ marginTop: "10px" }}>
              You can declare your investment amount from 1st to 22nd of every
              month until the cutoff date of Jan 22, 2024.
            </li>
          </ul>
          <div className="alertWarning">
            <p style={{ margin: "0", padding: "11px 19px 11px 12px" }}>
              Not submitting your investment proofs may lead to additional tax
              being deducted in the subsequent months of this fiscal year.
            </p>
          </div>
        </div>
      </div>
      <div className="decthreeboxes">
        <div className="decdatabox1">
          <p>NET TAXABLE INCOME</p>
          <p>INR 0</p>
          <p>NET TAXABLE INCOME</p>
        </div>
        <div className="decdatabox2">
          <p>TOTAL TAX PAYABLE</p>
          <p>INR 0</p>
        </div>
        <div className="decdatabox2">
          <p>TAX ALREADY PAID</p>
          <p>INR 0</p>
        </div>
      </div>
      <div className="managetax-nav">
        <p
          className={`manage-option1 ${
            selectedOption === "MyDeclaration" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("MyDeclaration")}
        >
          My Declaration
        </p>
        <p
          className={`manage-option1 ${
            selectedOption === "1.5lac" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("1.5lac")}
        >
          1.5Lac Deductions
        </p>
        <p
          className={`manage-option1 ${
            selectedOption === "Otherdeductions" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("Otherdeductions")}
        >
          Other Deductions
        </p>
        <p
          className={`manage-option1 ${
            selectedOption === "Taxsavingallowances" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("Taxsavingallowances")}
        >
          Tax Saving Allowances
        </p>
        <p
          className={`manage-option1 ${
            selectedOption === "Houseproperty" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("Houseproperty")}
        >
          House Property
        </p>
        <p
          className={`manage-option1 ${
            selectedOption === "Incomefromsources" ? "selected-option" : ""
          }`}
          onClick={() => handleManageOption("Incomefromsources")}
        >
          Income From Other Sources
        </p>
      </div>
      {selectedOption === "MyDeclaration" && <DecMydec />}
      {selectedOption === "Incomefromsources" && <Incomeothersou />}
      {selectedOption === "Houseproperty" && <Houseproperty />}
      {selectedOption === "Taxsavingallowances" && <Taxsavingallo />}
      {selectedOption === "Otherdeductions" && <Otherdeduc />}
      {selectedOption === "1.5lac" && <LacDeduction />}
    </>
  );
};
export default Declaration;
