import React from 'react'
import styles from "./Taxsavingallo.module.css";
import { GoSearch } from "react-icons/go";

const Taxsavingallo = () => {
  return (
    <div>
      <div className={styles.taxalloheading}>
        <p>Tax Saving Allowances</p>
        <p>Below are the declarations done by you under various sections.</p>
      </div>
      <div className={styles.taxsavingbox}>
        <div className={styles.taxsavinginrdata}>
          <div className={styles.amountinr}>
            <p>AMOUNT DECLARED</p>
            <p>INR 0</p>
          </div>
          <div className={styles.amountinr1}>
            <p>AUTO APPROVED AMOUNT</p>
            <p>INR 0</p>
          </div>
          <div className={styles.amountinr1}>
            <p>AMOUNT ACCEPTED</p>
            <p>INR 0</p>
          </div>
          <div className={styles.amountinr1}>
            <p>AMOUNT REJECTED</p>
            <p>INR 0</p>
          </div>
        </div>
        <div>
          <p className={styles.taxsavingdata}>
            Tax exempted values are based on the amount allocated in your salary
            structure. Please check income tax calculation to view tax exempted
            amount.
          </p>
        </div>
        <div>
          <div className={styles.searchanddropdown}>
            <div className={styles.selectitem}>
              <select
                className={styles.formselectlg}
                //aria-label=".form-select-lg example"
              >
                <option className={styles.optionmenu} selected>
                  Status
                </option>
              </select>
            </div>
            <div className={styles.leftheader}>
              <button className={styles.btnsearch}>
                <GoSearch
                  style={{
                    fontSize: "20px",
                    color: "#C9C9C9",
                    background: "none",
                    marginTop: "6px",
                  }}
                />
              </button>
              <input
                type="text"
                className={styles.inputsearch}
                placeholder="Search "
              />
            </div>
          </div>
        </div>
        <div>
          <table className={styles.lastboxintaxallo}>
            <tr>
              <th>
                <p>SECTION</p>
              </th>
              <th>
                <p>DEDUCTION NAME</p>
              </th>
              <th>
                <p>DECLARATION</p>
              </th>
              <th>
                <p>PROOF</p>
              </th>
              <th>
                <p>STATUS</p>
              </th>
              <th>
                <p>ACTIONS</p>
              </th>
            </tr>
          </table>
          <div className={styles.norecords}>No records found</div>
        </div>
      </div>
    </div>
  );
}

export default Taxsavingallo