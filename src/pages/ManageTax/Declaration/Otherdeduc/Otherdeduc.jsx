import React, { useEffect, useState } from "react";
import styles from "./Otherdeduc.module.css";
import { GoSearch } from "react-icons/go";
import { Button } from "@mui/material";
import dollarsign from "../../../../image/dollarsign.svg";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import questionmark from "../../../../image/questionmark.svg";
const Otherdeduc = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setSelectedItem(null);
    setIsEditModalOpen(false);
  };
  const saveEditedData = (editedData) => {
    // Update the data array with editedData
    // You can implement the logic to save the edited data here
    // For example, you can use an API call to update the data on the server
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const row = [
      {
        SECTION: "80CCD(1B)",
        DEDUCTIONNAME: "NPS Employee Contribution",
        DECLARATION: "INR 0",
        PROOF: "",
        STATUS: "",
      },
      {
        SECTION: "80CCD(2)",
        DEDUCTIONNAME: "NPS Employer Contribution",
        DECLARATION: "INR 0",
        PROOF: "",
        STATUS: "",
      },
      {
        SECTION: "80D",
        DEDUCTIONNAME: "Medical Insurance Premium",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80D",
        DEDUCTIONNAME: "Preventive Health Check-up",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80D",
        DEDUCTIONNAME: "Parents Preventive Health Check-up",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80D",
        DEDUCTIONNAME:
          "Medical Expenditure for a Handicapped RelativePS Employee Contribution",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80DD",
        DEDUCTIONNAME: " ",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80DDB",
        DEDUCTIONNAME: "Medical Expenditure on Self or Dependent",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80E",
        DEDUCTIONNAME: "Repayment of interest on Higher Education Loan",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80EE",
        DEDUCTIONNAME: "home loan interest for first time home owners",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80EEA",
        DEDUCTIONNAME:
          "Interest on loan for acquiring residential house property",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80EEB",
        DEDUCTIONNAME: "interest on loan for acquiring electric vechile",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80G",
        DEDUCTIONNAME: "donations towards social causes",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80G",
        DEDUCTIONNAME: "donations towards social causes",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80G",
        DEDUCTIONNAME: "donations towards social causes",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80G",
        DEDUCTIONNAME: "donations towards social causes",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80GGA",
        DEDUCTIONNAME: "Donation for research for rural development",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80GGC",
        DEDUCTIONNAME: "Donation to Political Parties",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80QQB",
        DEDUCTIONNAME: "royality on book",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80RRB",
        DEDUCTIONNAME: "royalityon patent",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80TTA",
        DEDUCTIONNAME: "Savings Account Interest Tax",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80TTB",
        DEDUCTIONNAME: "Savings Account Interest tax",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
      {
        SECTION: "80U",
        DEDUCTIONNAME:
          "Deduction with  respect to person suffering from physical disabilioty",
        DECLARATION: "Not Declared",
        PROOF: "No Proof",
        STATUS: "Not Submitted",
      },
    ];
    setData(row);
  }, []);

  return (
    <div>
      <div className={styles.taxalloheading}>
        <p>Other Deductions</p>
        <p>
          The aggregate amount of deductions under section 80C, section 80CCC
          and sub-section (1) of section 80CCD.
        </p>
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
        <div>
          <table className={styles.tableData}>
            <tr className={styles.headerdata}>
              <th className={styles.tablededuction}>
                <div className={styles.tableidheader}>SECTION</div>
              </th>
              <th className={styles.tablededuction}>
                <div className={styles.tableidheader}>DEDUCTIONNAME</div>
              </th>
              <th className={styles.tablededuction}>
                <div className={styles.tableidheader}>DECLARATION</div>
              </th>
              <th className={styles.tablededuction}>
                <div className={styles.tableidheader}>PROOF</div>
              </th>
              <th className={styles.tablededuction}>
                <div className={styles.tableidheader}>STATUS</div>
              </th>
              <th className={styles.tablededuction}>
                <div className={styles.tableidheader}>ACTIONS</div>
              </th>
            </tr>

            {data.map((item) => (
              <tr className={styles.deducrowdata} key={item.id}>
                <td className={styles.deductiondata}>
                  <div className={styles.sectiondata}>
                    {item.SECTION}
                    <sup>
                      <img src={dollarsign} />
                    </sup>
                  </div>
                </td>
                <td className={styles.deductiondata}>
                  <div className={styles.sectiondata}>
                    {" "}
                    <p>
                      {item.DEDUCTIONNAME}
                      <img className={styles.questionimg} src={questionmark} />
                    </p>
                    {/* <p>
                      <img src={questionmark} />
                    </p> */}
                  </div>
                </td>
                <td className={styles.deductiondata}>
                  <div className={styles.declarationdata}>
                    {item.DECLARATION === "Not Declared"?(<span>{item.DECLARATION}</span>):(<span className={styles.inramount}>{item.DECLARATION}</span>)}
                  </div>
                </td>
                <td className={styles.deductiondata}>
                  <div className={styles.declarationdata}>{item.PROOF}</div>
                </td>
                <td className={styles.deductiondata}>
                  <div className={styles.declarationdata}>{item.STATUS}</div>
                </td>

                <td className={styles.deductiondata}>
                  <div className={styles.divBUTON}>
                    <div className={styles.editconbtn}>
                      <Button
                        onClick={() => openEditModal(item)}
                        className={styles.editicon}
                      >
                        <svg
                          width="14"
                          height="14"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          color="#7367F0"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />{" "}
                        </svg>
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <Dialog
          className={styles.editbox}
          open={isEditModalOpen}
          onClose={closeEditModal}
        >
          {selectedItem && (
            <div className={styles.inputclass}>
              <DialogContent>
                <input
                  type="text"
                  value={selectedItem.SECTION}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      SECTION: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Deductionname"
                  value={selectedItem.DEDUCTIONNAME}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      DEDUCTIONNAME: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  placeholder="Declaration"
                  value={selectedItem.DECLARATION}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      DECLARATION: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  placeholder="proof"
                  value={selectedItem.PROOF}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      PROOF: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="status"
                  value={selectedItem.STATUS}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      STATUS: e.target.value,
                    })
                  }
                />
              </DialogContent>
              <Button
                onClick={() => {
                  saveEditedData(selectedItem);
                  closeEditModal();
                }}
                style={{ marginLeft: "400px" }}
              >
                Save
              </Button>
              <Button onClick={closeEditModal}>Cancel</Button>
            </div>
          )}
        </Dialog>
        <div className={styles.paginationpart}>
          <p>1 to 19of19</p>
          <p>Page 1of1</p>
        </div>
      </div>
    </div>
  );
};

export default Otherdeduc;
