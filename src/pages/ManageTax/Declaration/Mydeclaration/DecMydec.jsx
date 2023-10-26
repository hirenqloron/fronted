import styles from "./DecMydec.module.css";
import circleicon from "../../../../image/Rectangle 424.svg";
import Rectangleicon1 from "../../../../image/Rectangle 346.svg";
import Rectangleicon2 from "../../../../image/Rectangle 347.svg";
import Rectangleicon3 from "../../../../image/Rectangle 348.svg";
const DecMydec=()=>{
    return (
      <>
        <div className={styles.decheading}>
          <p>My Declaration</p>
          <p>Below are the declarations done by you under various sections.</p>
        </div>
        <div className={styles.dectable1}>
          <p className={styles.tableheading}></p>
          <table className={styles.declarationtable}>
            <tr className={styles.dectablerow}>
              <td>1.5 Lac Deductions</td>
              <td>2</td>
              <td>INR 0</td>
              <td>0</td>
              <td>INR 0</td>
              <td>INR 0</td>
            </tr>
            <tr>
              <td>Other Deductions</td>
              <td>1</td>
              <td>INR 0</td>
              <td>0</td>
              <td>INR 0</td>
              <td>INR 0</td>
            </tr>
            <tr>
              <td>Tax Saving Allowances</td>
              <td>0</td>
              <td>INR 0</td>

              <td>0</td>
              <td>INR 0</td>
              <td>INR 0</td>
            </tr>
            <tr>
              <td>House tdrotderty</td>
              <td>0</td>
              <td>INR 0</td>
              <td>0</td>
              <td>INR 0</td>
              <td>INR 0</td>
            </tr>
            <tr>
              {" "}
              <td>Income from Other Sources</td>
              <td> 0</td>
              <td>INR 0</td>
              <td> 0</td>
              <td>INR 0</td>
              <td>INR 0</td>
            </tr>
          </table>
        </div>
        <div className={styles.mydecheading}>
          <p>My Declaration</p>
          <p>Below are the declarations done by you under various sections.</p>
        </div>
        <div className={styles.mydecbox}>
          <div className={styles.mydecboxes}>
            <div className={styles.mydecsubdata}>
              <p>TOTAL TAX PAYABLE</p>
              <p>INR 0</p>
            </div>
            <div className={styles.mydecsubdata}>
              <p>TAX PAID TILL NOW</p>
              <p>INR 0</p>
            </div>
            <div className={styles.mydecsubdata}>
              <p>REMANINING TAX AMOUNT</p>
              <p>INR 0</p>
            </div>
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
              <p>INR 0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                SEP 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>INR 0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                OCT 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>INR 0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                NOV 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>INR 0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                DEC 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>INR 0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                JAN 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>INR 0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                FEB 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>INR 0</p>
            </div>
            <div className={styles.tablebox21}>
              <p>
                MAR 2023
                <img className={styles.circleicons} src={circleicon} />
              </p>
              <p>INR 0</p>
            </div>
          </div>
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
                Imported tax deduction from current employeer
              </p>
            </div>
            <div className={styles.rectdot1}>
              <p>
                <img className={styles.colorboximage} src={Rectangleicon3} />
              </p>
              <p className={styles.incomeheading}>
                Tax deductionfrom projected Salary
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
export default DecMydec