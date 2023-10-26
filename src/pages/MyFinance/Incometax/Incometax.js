import styles from "./Incometax.module.css";
import { useNavigate } from "react-router-dom";
import Rectangleicon1 from "../../../image/Rectangle 346.svg";
import Rectangleicon2 from "../../../image/Rectangle 347.svg";
import Rectangleicon3 from "../../../image/Rectangle 348.svg";
import circleicon from "../../../image/Rectangle 424.svg";
import downloadicon from "../../../image/downloadicon.svg";
import Bulb from "../../../image/bulb.svg";

const Incometax = () => {
  const navigate = useNavigate();
  const handlesalary = () => {
    navigate("/mypay/mysalary");
  };
  const handlepaySlip = () => {
    navigate("/mypay/payslips");
  };
  const handleSummary = () => {
    navigate("/myfinance/summary");
  };
  const handlePay = () => {
    navigate("/mypay/mysalary");
  };
  const handleManagetax=()=>{
    navigate("/managetax")
  }
  return (
    <div>
      <div className="summary-bar">
        <p onClick={handleSummary}>SUMMARY</p>
        <p style={{background:"#7367F0",color:"white"}} onClick={handlePay}>MY PAY</p>
        <p onClick={handleManagetax}>MANAGE TAX</p>
      </div>
      <div className="paybar">
        <p onClick={handlesalary}>MY SALARY</p>
        <p onClick={handlepaySlip}>PAY SLIPS</p>
        <p className={styles.incometaxheading}>INCOME TAX</p>
      </div>
      <div className={styles.incometaxcomputation}>
        <div className={styles.incometextwithicon}>
          <p>Income Tax Computation</p>
          <p>
            <img src={downloadicon} />
          </p>
        </div>
        <div className={styles.selectitem}>
          <select
            className={styles.formselectlg}
            //aria-label=".form-select-lg example"
          >
            <option className={styles.optionmenu} selected>
              APR 2023 - MAR 2024
            </option>
          </select>
        </div>
      </div>
      <div className={styles.incometaxcontent}>
        <p>
          View complete breakup of payments, deductions and declarations. You
          can analyze how income tax is being calculated and what is the TDS
          every month.
        </p>
      </div>
      <div className={styles.impinformation}>
        <div className={styles.bulbicon}>
          <p>
            <img src={Bulb} />
          </p>
          <p>Important!</p>
        </div>
        <div className={styles.listinfo}>
          <li>
            Current Income tax calculation is considering DECLARED amounts of
            Investment Declaration irrespective of the approval status.
          </li>
          <li>
            Your Income and tax liability is being computed as per New Tax
            Regime. To learn more and switch to Old Tax Regime, click here.
          </li>
        </div>
      </div>
      <div>
        <div className={styles.incometaxbox}>
          <div className={styles.incometaxtable1}>
            <span>
              <p>NET TAXABLE INCOME</p>
              <p>INR 0</p>
            </span>
            <span>
              <p>GROSS INCOME TAX</p>
              <p>INR 0</p>
            </span>
            <span>
              <p> TOTAL SURCHARGE & CESS</p>
              <p>INR 0</p>
            </span>
            <span>
              <p>NET TAXABLE INCOME</p>
              <p>INR 0</p>
            </span>
            <span>
              <p>TAX PAID TILL NOW</p>
              <p>INR 0</p>
            </span>
            <span>
              <p>REMAINING TAX TO BE PAID</p>
              <p>INR 0</p>
            </span>
          </div>
          <div className={styles.grossearningheading}>
            <p>A</p>
            <p>Gross Earnings from Employment</p>
          </div>
          <div className={styles.salarydetailsofemp}>
            <div className={styles.rectangledots}>
              <div className={styles.rectdot1}>
                <p>
                  <img className={styles.colorboximage} src={Rectangleicon1} />
                </p>
                <p className={styles.incomehead1}>
                  Income from Previous Employer
                </p>
              </div>
              <div className={styles.rectdot1}>
                <p>
                  <img className={styles.colorboximage} src={Rectangleicon2} />
                </p>
                <p className={styles.incomehead2}>
                  Income from Current Employer (imported)
                </p>
              </div>

              <div className={styles.rectdot1}>
                <p>
                  <img className={styles.colorboximage} src={Rectangleicon3} />
                </p>
                <p className={styles.incomehead3}>Projected Salary</p>
              </div>
            </div>
            <div className={styles.bigtableboxes}>
              <div className={styles.tablebox1}>
                <p>SALARY BREAKUP</p>
                <p>Basic</p>
                <p>Total Earnings</p>
              </div>
              <div className={styles.tablebox2}>
                <p>TOTAL</p>
                <p>40,000</p>
                <p>40,000</p>
              </div>
              <div className={styles.tablebox2}>
                <p>
                  AUG 23
                  <img className={styles.circleicons} src={circleicon} />
                </p>
                <p>5,000</p>
                <p>5,000</p>
              </div>
              <div className={styles.tablebox2}>
                <p>
                  SEP 23
                  <img className={styles.circleicons} src={circleicon} />
                </p>
                <p>5,000</p>
                <p>5,000</p>
              </div>
              <div className={styles.tablebox2}>
                <p>
                  OCT 23
                  <img className={styles.circleicons} src={circleicon} />
                </p>
                <p>5,000</p>
                <p>5,000</p>
              </div>
              <div className={styles.tablebox2}>
                <p>
                  NOV 23
                  <img className={styles.circleicons} src={circleicon} />
                </p>
                <p>5,000</p>
                <p>5,000</p>
              </div>
              <div className={styles.tablebox2}>
                <p>
                  DEC 23
                  <img className={styles.circleicons} src={circleicon} />
                </p>
                <p>5,000</p>
                <p>5,000</p>
              </div>
              <div className={styles.tablebox2}>
                <p>
                  JAN 23
                  <img className={styles.circleicons} src={circleicon} />
                </p>
                <p>5,000</p>
                <p>5,000</p>
              </div>
              <div className={styles.tablebox2}>
                <p>
                  FEB 23
                  <img className={styles.circleicons} src={circleicon} />
                </p>
                <p>5,000</p>
                <p>5,000</p>
              </div>
              <div className={styles.tablebox2}>
                <p>
                  MAR 23
                  <img className={styles.circleicons} src={circleicon} />
                </p>
                <p>5,000</p>
                <p>5,000</p>
              </div>
            </div>
          </div>
          <div className={styles.grossearningheading}>
            <p>B</p>
            <p>Taxable Income from All Heads</p>
          </div>
          <div className={styles.grossearningheading}>
            <p>IS</p>
            <p>Income from Salaries</p>
          </div>
          <div className={styles.bigtableboxes1}>
            <div className={styles.tablebox3}>
              <p>Total Salary Received</p>
              <p>Total</p>
            </div>
            <div className={styles.tablebox4}>
              <p>40,000</p>
              <p>40,000</p>
            </div>
          </div>
          <div className={styles.taxexemp}>
            <p>Less: Section 16 Tax Exemptions</p>
          </div>
          <div className={styles.bigtableboxes2}>
            <div className={styles.tablebox3}>
              <p>
                16(ia)
                <span className={styles.spancontent}>Standard Deduction</span>
              </p>
              <p>Total</p>
            </div>
            <div className={styles.tablebox5}>
              <p>40,000</p>
              <p>40,000</p>
            </div>
          </div>
          <div className={styles.taxheading}>
            <p>Taxable Amount under Head "Salaries"</p>
            <p>0</p>
          </div>
          <div className={styles.taxheading1}>
            <p>Total Gross From all Heads</p>
            <p>0</p>
          </div>
          <div className={styles.bigtableboxes3}>
            <div className={styles.tablebox62}>
              <p>Total Taxable Amount</p>
              <p>Net taxable income is</p>
            </div>
            <div className={styles.tablebox71}>
              <p>0</p>
              <p>0</p>
            </div>
          </div>
          <div className={styles.grossearningheading}>
            <p>P</p>
            <p>Tax Calculation</p>
          </div>
          <div className={styles.headingtax}>
            <div className={styles.bigtablebox}>
              <table className={styles.taxfirstrow}>
                <tr className={styles.firstrow}>
                  <th>TAXABLE INCOME SLABS</th>
                  <th><span>TAXABLE INCOME SLABS</span></th>
                </tr>
                <tr>
                  <td>0% Tax on income up to 300000</td>
                  <td>
                    <span>0</span>
                  </td>
                </tr>
                <tr>
                  <td>
                  5% Tax on income between 300001 and 600000
                  </td>
                  <td>
                    <span>0</span>
                  </td>
                </tr>
                <tr>
                  <td>10% Tax on income between 600001 and 900000</td>
                  <td>
                    <span>0</span>
                  </td>
                </tr>
                <tr>
                  <td>15% Tax on income between 900001 and 1200000</td>
                  <td>
                    <span>0</span>
                  </td>
                </tr>
                <tr>
                  <td>20% Tax on income between 1200001 and 1500000</td>
                  <td>
                    <span>0</span>
                  </td>
                </tr>
                <tr>
                  <td>
                  30% Tax on income above 1500000
                  </td>
                  <td>
                    <span>0</span>
                  </td>
                </tr>
                <tr>
                  <td>Tax Rebate-Section 87A When taxable income less than 700000 or additional relief applicable</td>
                  <td><span>0</span></td>
                </tr>
                <tr>
                  <td>Gross Income Tax</td>
                  <td>
                    <span>0</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.grossearningheading}>
            <p>Q</p>
            <p>Surcharge & Cess</p>
          </div>
          <div className={styles.bigtableboxes3}>
            <div className={styles.tablebox6}>
              <p>
                Health and Education Cess - 4% of Gross Income Tax and Surcharge
              </p>
              <p>Total Surcharge & Cess</p>
            </div>
            <div className={styles.tablebox7}>
              <p>0</p>
              <p>0</p>
            </div>
          </div>
          <div className={styles.grossearningheading}>
            <p>T</p>
            <p>Net Income Tax Payable</p>
          </div>
          <div className={styles.bigtableboxes3}>
            <div className={styles.tablebox61}>
            <div className={styles.pandqboxes}>
            <div className={styles.grossearningheading2}>
            <p>P</p>
            <p>Tax Calculation</p>
            <p style={{marginLeft:"20px"}}>+</p>
          </div>
              <div className={styles.grossearningheading2}>
            <p>Q</p>
            <p>Surcharge & Cess</p>
          </div>
          </div>
                        <p className={styles.tablebox61content}>Net tax amount of 0 after round Off is</p>
            </div>
            <div className={styles.tablebox7}>
              <p>0</p>
              <p>0</p>
            </div>
          </div>
          <div className={styles.grossearningheading}>
            <p>T</p>
            <p>Cumulative Tax Deductions Details</p>
          </div>
          <div className={styles.taxheading21}>
            <p>Tax Paid Till Now</p>
            <p className={styles.remainingtax}>0</p>
          </div>
          <div className={styles.taxheading22}>
            <p>Remaining Tax To Be Paid</p>
            <p className={styles.remainingtax}>0</p>
          </div>
          <div className={styles.grossearningheading}>
            <p>V</p>
            <p>Month on Month Tax Deductions Details</p>
          </div>
          <div className={styles.bigtableboxes21}>
            <div className={styles.tablebox11}>
              <p>MONTH</p>
              <p>Monthly Total Tax</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                AUG 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                SEP 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                OCT 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                NOV 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                DEC 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                JAN 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                FEB 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                MAR 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>0</p>
            </div>
          </div>
          <div className={styles.lastincomebox}>
            <div className={styles.lastboxdata}>
              <div className={styles.rectdot1}>
                <p>
                  <img className={styles.colorboximage} src={Rectangleicon1} />
                </p>
                <p className={styles.incomeheading}>
                  Tax Deduction from previous employer
                </p>
              </div>
              <div className={styles.rectdot1}>
                <p>
                  <img className={styles.colorboximage} src={Rectangleicon2} />
                </p>
                <p className={styles.incomeheading}>
                  Income from Current Employer (imported)
                </p>
              </div>
              <div className={styles.rectdot1}>
                <p>
                  <img className={styles.colorboximage} src={Rectangleicon3} />
                </p>
                <p className={styles.incomeheading}>Projected Salary</p>
              </div>
            </div>
            <div className={styles.lastboxcontent}>
              <p>
                * Projected Income Tax does not include any revisions, bonuses
                or other additional projected payments other than salary
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Incometax;
