import React, { useState } from "react";
import "./Mypay.css";
import businessmodellogo from "../../../image/Businessmodellogo.svg";
import arrowgrowth from "../../../image/arrowgrowth.svg";
import onlinepay from "../../../image/Online pay.svg";
import { useNavigate } from "react-router-dom";
import Salarybreakup from "../Salarybreakup";
const Mypay = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const Navigate = useNavigate();

  const handleClick1 = () => {
    Navigate("/mypay/payslips");
  };
  const handleSummary = () => {
    Navigate("/myfinance/summary");
  };
  const handleTax = () => {
    Navigate("/mypay/incometax");
  };
  const handleManageTax = () => {
    Navigate("/managetax");
  };
  return (
    <div>
      <div className="summary-bar">
        <p onClick={handleSummary}>SUMMARY</p>
        <p style={{background:"#7367F0",color:"white"}}>MY PAY</p>
        <p onClick={handleManageTax}>MANAGE TAX</p>
      </div>
      <div className="paybar">
        <p className="mysalaryheading">MY SALARY</p>
        <p onClick={handleClick1}>PAY SLIPS</p>
        <p onClick={handleTax}>INCOME TAX</p>
      </div>
      <div className="paybar-1">
        <div className="box-1">
          <p>CURRENT COMPENSATION</p>
          <div className="imagelogo">
            <img className="businesslogo" src={businessmodellogo} alt="photo" />
          </div>
          <p>INR 3,60,000.00 / Annum</p>
        </div>
        <div className="box-2">
          <div className="box-2-1">
            <p>Payroll</p>
          </div>
          <div className="box-2-2">
            <div className="salaryhead1">
              REMUNERATION <span className="paycircle">PAY CIRCLE</span>
            </div>
            <div className="salaryno1">
              Monthly<span className="monthly">Monthly</span>
            </div>
          </div>
          <div className="boximg">
            <p className="humanimg">
              <img className="onlinepayimg" src={onlinepay} />
            </p>
          </div>
        </div>
      </div>
      <div className="paybox-2">
        <p className="salaryheading">Salary Timeline</p>
        <div className="salarycontent">
          <p className="contentinside">
            Your Income and tax liability is being computed as per New Tax
            Regime. To learn more and switch to Old Tax Regime,{" "}
            <a>click here.</a>
          </p>
        </div>
        <div className="paybox-sub">
          <p className="arrowimg">
            <img className="arrowgrowthimg" src={arrowgrowth} alt="arrow" />
          </p>
          <p>Salary Revision</p>
          <p>Effective Aug 21, 2023</p>
          <p>CURRENT</p>
        </div>
        <div className="paybox-3">
          <div className="salaryhead">
            REGULAR SALARY <span className="salarytotal">TOTAL</span>
          </div>
          <div className="salaryno">
            INR 3,60,000 <span className="salarytotal1">INR 3,60,000</span>
          </div>
          <div className="salarydetails">
            <p>REGULAR SALARY</p>
            <p>INR 3,60,000/Annum</p>
            <div>
              <p onClick={handleOpen}>Salary breakup</p>
              <Salarybreakup open={open} setOpen={setOpen} />
            </div>
          </div>

          <div className="salaryhead">
            SALARY PER MONTH{" "}
            <span className="salarytotal2">EFFECTIVE FROM</span>
          </div>
          <div className="salaryno">
            INR 27,000<span className="salarytotal3">Aug 21, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mypay;
